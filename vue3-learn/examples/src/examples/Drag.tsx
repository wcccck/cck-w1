import { defineComponent,ref,reactive } from 'vue';
import _ from 'lodash'
export const DragExamples = defineComponent({
  setup(props, ctx) {
    return ()=>{
      return <Draggable> 
        <div style={{width:'200px',height:"200px",backgroundColor:"skyblue"}}></div>
      </Draggable>
    }
  },
})

function useDrag(){
  let startX =0 ,startY = 0
  const diffX = ref(0)
  const diffY = ref(0)
  const handlers = {
    ondragstart(e:DragEvent){
      startX = e.clientX
      startY = e.clientY
    },
    onDrag(e:DragEvent){
      diffX.value =  e.clientX- startX
      diffY.value = e.clientY - startY
      console.log(e.clientX)
      // console.log("y" + diffY.value)
    },
    onDragend(e:DragEvent){
      diffX.value =  e.clientX- startX
      diffY.value = e.clientY - startY
    }
  }
  return {handlers,x:diffX.value,y:diffY.value}
}

const Draggable = defineComponent({
  setup(props, ctx) {
    const {handlers} = useDrag()
    
    return ()=>{
      const {slots} = ctx
      const VNode = slots.default!()[0]
      _.merge(VNode.props,{
        Draggable:true,
        ...handlers
      })
      console.log(VNode)
      return <>{VNode}</>
    }
  },
})
