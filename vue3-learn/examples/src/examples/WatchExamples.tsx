import { watchEffect,defineComponent,ref, watch } from "vue";

export const WatchExeamples01 = defineComponent({
  setup(props, ctx) {
    const count = ref(0)
    watchEffect(()=>{
      document.title = 'Count:'+ count.value
      // history.replaceState({},null,"/count" + count.value)
    })
    return ()=>{
      return <div>
        <button onClick={()=>{
          count.value++          
        }}>+</button>
        {count.value}
      </div>
    }
  },
})

export const WatchExeamples02 = defineComponent({
  setup(props, ctx) {
    const count = ref(0)
    watchEffect((f)=>{
      console.log(count.value)
      // let I = setInterval(()=>{
      //   count.value ++
      // },1000)
      // f(()=>{
      //   clearInterval(I)
      // })
    })
    return ()=>{
      return <div>
        <button onClick={()=>{
          count.value++          
        }}>+</button>
        {count.value}
      </div>
    }
  },
})

export const WatchExeamples03 = defineComponent({
  setup(props, ctx) {
    const count = ref(0)
    watch(count,()=>{
      console.log(count.value + '---watch')
    })
    setTimeout(()=>{
      count.value++
    },1000)
    return ()=>{
      return <div><button onClick={()=>{count.value++}}>+</button>{count.value}</div>
    }
  },
})

export const WatchExeamples06 = defineComponent({
  setup(props, ctx) {
    const a = ref(0)
    const b = ref(0)
    watch([a,b],(x,y)=>{
      console.log(x,y)
    })
    // setInterval(()=>{
    //     a.value += 0.2
    // },500)
    // setInterval(()=>{
    //     b.value +=0.7
    // })
    return ()=>{
      return <div>
        {a.value + b.value}
        </div>
    }
  },
})