import { defineComponent, onActivated, onBeforeMount, onBeforeUnmount, onMounted, onRenderTracked, onRenderTriggered, onUnmounted, ref,KeepAlive, onDeactivated } from "vue";

export const LifeExamples01 = defineComponent({
  setup(props, ctx) {
    onMounted(()=>[
      console.log('father Mounted')
    ])
    onBeforeMount(()=>{
      console.log('father BeforeMounted')
    })
    return ()=>{
      return <B>1</B>
    }
  },
})

const B = defineComponent({
  setup(props, ctx) {
    onMounted(()=>[
      console.log('son Mounted')
    ])
    onBeforeMount(()=>{
      console.log('son BeforeMounted')
    })

    onUnmounted(()=>{
      console.log('son onUnmounted')
    })
    onBeforeUnmount(()=>{
      console.log('son onBeforeUnomunt')
    })
  },
})

export const LifeExamples02 = defineComponent({
  setup(){
    const count = ref(0)
    onRenderTriggered((x)=>{
      console.log(x)
    })// use data
    onRenderTracked((x)=>{console.log(x)}) //change value
    return ()=>{
      return <div>{count.value} <button onClick={()=>{count.value ++}}>+</button></div>
    }
  }
})

export const LifeExamples03 = defineComponent({
  setup(props, ctx) {
    const tolgger = ref(false)

    return ()=>{
      return<div>
        {tolgger.value}
        <button onClick={()=>{
          tolgger.value = tolgger.value === false? true : false
        }}>changge</button>
        <KeepAlive>{tolgger.value && <A/>}</KeepAlive>
      </div>
    }
  },
})

const A = defineComponent({
  setup(props, ctx) {
    onActivated(()=>{
      console.log('huan')
    })
    onDeactivated(()=>{
      console.log('deHuan')
    })
    onUnmounted(()=>{
      console.log('un')
    })
    return ()=>{
      return <div>AAA</div>
    }
  },
})
