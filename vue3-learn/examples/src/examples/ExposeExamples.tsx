import { defineComponent,ref, watch } from "vue";

export const ExposeExamples01 = defineComponent({
  setup(props, ctx) {
    const ipt =  ref<HTMLInputElement|null>(null)
    watch(ipt,()=>{
      if(ipt.value){
        ipt.value.value = 'hello cck'
        ipt.value.focus()
      }
    })
      return ()=>{
        return <input ref={ipt}></input>
      }
  },
})

export const ExposeExamples02 = defineComponent({
  setup(props, ctx) {
    
    const di = ref<any>(null) // get A Component inside node

    watch(di,()=>{
      if(di.value){
        console.log(di.value.na)
        console.log(di.value.foo)
      }
    })
    return ()=>{
      return <B ref={di}/>
    }
  },
})

const A = ()=>{
  return <div>....A</div>
}

const B = defineComponent({
  setup(props, {expose}) {
    const div = ref<HTMLDivElement | null>(null)
    expose({
      foo:"bar",
      na:"ss",
      // div
      div
    })
    return ()=>{
      return <div ref={div}>....B</div>
    }
  },
})