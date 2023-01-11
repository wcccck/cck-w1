import { defineComponent,computed,ref, PropType,reactive, toRefs,Ref } from "vue";
// import './button.scss'
import myStyle from './button.module.scss'
// console.log(myStyle)
export const ComponentExamples01 = ()=>{
  return <Button text={'tsxx'}></Button>
}

const Button = defineComponent({
  props:{
    text:{
      type:String
    }
  },
  setup(props, ctx) {
    return ()=>  <button class={myStyle.btn} style={{padding:'20px'}}>{props.text}</button>
  },
})

export const ComponentExamples02 = ()=>{
  return <Button2>hello world</Button2>
}

const Button2 = defineComponent({
  setup(props, ctx) {
    // console.log(ctx)
    // const child  = ctx.slots.default!
    const Child  = ctx.slots.default! as any as ()=> JSX.Element
    // console.log(ctx.slots)
    return ()=> <button><Child/></button>
  },
})


export const ComponentExamples03 = ()=>{
  // (<Pannel v-slots={{head:<span>i am head</span>}} >
  return <Pannel header={<span>my title22</span>}>
    hello pannel
  </Pannel>
}

const Pannel = defineComponent({
  props:{
    header:{
      type: Object as PropType<JSX.Element>
    }
  },
  setup(props, {slots}) {
    return ()=> <div>
      <header>{props.header}</header>
      {slots.default!()}</div>
  },
})

export const ComponentExamples04 = ()=>{
  return <Flex>
    <div>
      <div>a</div>
      <div>b</div>
      <div>c</div>
    </div>
  </Flex>
}

const Flex = defineComponent({
  setup(props,{slots}){
    const divNode = slots.default!()[0]
    if(!divNode.props){
      divNode.props = {

      }
    }
    divNode.props.style = {
      display:'flex'
    }
    return ()=>{
      // debugger
      return <>
      {divNode}
      </>
    }
  }
})

export const ComponentExamples05 =defineComponent({
  setup(props, ctx) {
    const userInfo = reactive({
      username:'s1mple'
    })
    // setTimeout(()=>{
    //   userInfo.username = 'bit'
    // },1000)

    const {username} = toRefs(userInfo)
    return ()=>{
      return <div><Input value={username}/> {username.value}</div>
    }
  },
})

const Input = ({value}:{value:Ref<string>})=>{
  return <input value={value.value} onInput={(e)=>{
    value.value = (e.target as HTMLInputElement).value
  }}></input>
}

export const ComponentExamples06 = defineComponent({
  setup(props, ctx) {
    const {from} = useFrom({
      username:"bit"
    })
    setTimeout(()=>{
      from.username = 'electrion'
    },2000)

    return ()=>{
      return <div>06<Input2 value={from.username} onChange={v=>{
        from.username = v
      }} /></div>
    }
  },
})

const Input2 = ({value,onChange}:
  {value:string,onChange?:(k:string)=>void}
  )=>{
  return <input value={value}  onInput={(e)=>{onChange && onChange( (e.target as HTMLInputElement).value )}}/>
}

class From<T extends Record<string,any>> {
  constructor(private data:{
    [key:string] :any
  }){
  }
  public getValue(key:string){
    return this.data[key]
  }
  public setValue(key:string,value:any){
    this.data[key] = value
  }
}

function useFrom<T extends Record<string,any>>(data:T){
  const from = new From<T>(data)
  
  const proxy = new Proxy(from,{
    get(target,key){
      // console.log(from.getValue(key as string))
      return from.getValue(key as string)
    },
    set(target,key,value){
      from.setValue(key as string,value)
      return true
    }
  })

  return {
    from:proxy as any as T
  }

}