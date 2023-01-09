import {effectScope, defineComponent,watch,watchEffect,ref } from "vue";

export const ScopeExamples01 = defineComponent({
  setup(props, ctx) {
    const count = ref(0)
    const scope = effectScope()

    scope.run(()=>{
      watch(count,()=>{
        console.log('watch effct' + count.value)
      })
    })

    // setInterval(()=>{
    //   count.value ++
    // },300)
    setTimeout(()=>{
      scope.stop()
    },3000)
    return ()=>{
      return <div>
        {count.value}
      </div>
    }
  },
})