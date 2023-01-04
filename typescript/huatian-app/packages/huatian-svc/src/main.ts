import express, { NextFunction,Request,Response } from 'express'
import { Token } from './dao/Token'
const app = express()


import cookieParser from 'cookie-parser'
import { AccountContext } from './context/AccountContext'
app.use(cookieParser())

async function sendStdResponse<T>(res:Response, f:T);
async function sendStdResponse(res:Response, f:Promise<any>);
async function sendStdResponse(res:Response, f:()=>Promise<any>);
async function sendStdResponse(res:Response,f: any){
  try {
    
    let data = typeof f === 'function' ? f() : f
    if(data instanceof Promise){
      data = await data
    }
    res.send({
      success:true,
      data
    })
  } catch (ex:any) {
      console.error(ex)
      res.status(500).send({
        success:false,
        message:ex.toString()
      })
  }
 
}

function token(req:Request & { uid:number},res:Response,next:NextFunction) {
  const tokenHash = req.cookies['x-token'] as string

  const token = Token.getInstance()
  const tokenObject = token.getToken(tokenHash)
  if(tokenObject === null){
    res.status(401).send({
      success:false
    })
    return
  }

  req.uid = tokenObject.uid
  next()
}

app.get('/foo',token,(req:Request & {uid:number},res)=>{
  res.send(req.uid + '-ok')
})

app.post('/token',express.json(),async(req,res)=>{
  const {uname,pwd} = req.body
  const account = AccountContext.getInstance()
  const user = await account.verify(uname,pwd)
  const token = Token.getInstance()
  const tokenObject = token.refreshToken(user.getId())
  res.cookie('x-token',tokenObject.token)
  sendStdResponse(res,"ok")  

})
app.listen(6004,()=>{
  console.log("http://localhost:6004");
})