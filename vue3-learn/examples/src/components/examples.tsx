import { defineComponent,ref } from "vue";

export const com1 = defineComponent({
  setup(){
    let num = ref(0)

    return ()=>{
      return <h1>com1-Component{num.value}</h1>
    }
  }
})

