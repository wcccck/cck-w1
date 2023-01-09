import { defineComponent,PropType,Ref,ref } from 'vue';

export const test1 = defineComponent({
  setup(){
    const count = ref(0)
    console.log("render")
    return () =>{
      return <div><button onClick={()=>{count.value++}}>+</button> <Counter count={count} count2={count}/><Counter2/></div>
    }
  }
})

const Counter = ({count,count2}:{
  count:Ref<number>,
  count2:Ref<number>
})=>{
  return <h1>{count.value} ---- count2 {count2.value}</h1>
}

const Counter2 = defineComponent({
  props:{
    count:{
      type:Object as PropType<Ref<number>>
    }
  },
  setup(props){
    return ()=>{
      return <div>Count2:{props.count?.value}</div>
    }
  }
})

 