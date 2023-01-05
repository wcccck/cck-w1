import { createApp } from 'vue'
import App from './App'

const examples = import.meta.glob("./examples/**/*.tsx")



const examplePrimise = Object.keys(examples) // get all key
.map(x=>examples[x]) // use key get valueComponent
.map(x=>x()) // call valueComponent function
Promise.all(examplePrimise)
  .then(list=>{
  for(let module of list){
    for (let key in module) {
      const Component = module[key]
      console.log(Component);
    }
  }
  
  createApp(App).mount('#app')
})

