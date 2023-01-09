import { defineComponent,provide,inject,reactive } from "vue";

type ThemeType = {
  color:string
}
export const PrivideExamples01 = defineComponent({
  setup(){
    const theme = reactive({
      color:"red"
    })
    provide("theme",theme)
    return ()=>{
      return <div>
        <button onClick={()=>{theme.color = 'pink'}}>changeColor</button>
        <A/>
      </div>
    }
  }
})

 const A = defineComponent({
  setup(){
    return ()=>{
      return <B/>
    }
  }
})

 const B = defineComponent({
  setup(){
    const theme = inject('theme') as ThemeType
    return ()=>{
      return <div style={{backgroundColor:theme.color}}>123</div>
    }
  }
})

type User = {
  username:string,
  loggedIn:boolean
}

function loggin(ms:number){
  return new Promise((resolve)=>{
   setTimeout(() => {
      resolve(null)
   }, ms);
  })
}
// 封装
function useUserContext(){
  const user = reactive<User>({
    loggedIn:false,
    username:''
  })
  provide("user",user)
  loggin(2000).then(()=>{
    user.username = 'cck'
    user.loggedIn =  true
  })
}
export const ProvideExamples02 = defineComponent({
  setup(props, ctx) {
    useUserContext()
    return ()=>{
      return <div>
        <Head/>
      </div>
    }
  },
})

const Head = defineComponent({
  setup(){
    const user = inject('user') as User
    return ()=>{
      return <header>
        有道精品课
        <strong>{user.username}</strong>
      </header>
    }
  }
})

