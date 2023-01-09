import { defineComponent,reactive,ref } from "vue";

export const com1 = defineComponent({
  setup(){
    let num = ref(0)

    return ()=>{
      return <h1>com1-Component{num.value}</h1>
    }
  }
})

export const com2 = defineComponent({
  setup(){
    let num = reactive({
      a:0,
      b:9
    })

    return()=>{
      return <h1></h1>
    }
  }
})
