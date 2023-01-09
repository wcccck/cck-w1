import { defineComponent,computed,ref } from "vue";

function reserve(text:string):string{
  return [...text].reverse().join('')
}
export const computedExamples = defineComponent({
  setup(props, ctx) {
    const text = ref('hello')
    return ()=>{
      return <div>
        {reserve(text.value)}
        <input type="text" value={text.value} onInput={(e)=>{
          text.value = (e.target as HTMLInputElement).value
        }}/>    
      </div>
    }
  },
})

export const computedExamples2 = defineComponent({
  setup(props, ctx) {
    const text = ref('hello')
    const textValue = computed(()=>{
      return [...text.value].reverse().join('')
    })
    return ()=>{
      return <div>{textValue.value} 
        <input type="text" onInput={(e)=>{
          text.value = (e.target as HTMLInputElement).value
        }}/>
      </div>
    }
  },
})