import { createApp } from 'vue'
import { createRouter,createWebHashHistory } from 'vue-router'
import { myRouteType } from './myRouteType'
import App from './App'

import './components/index'
const routes:myRouteType[] = []

const examples = import.meta.glob("./examples/**/*.tsx")
const examplePrimise = Object.keys(examples) // get all key
.map(x=>examples[x]) // use key get valueComponent
.map(f=>f()) // call valueComponent function
Promise.all(examplePrimise).then(list=>{

  for(let module of list){

    for (let key in module) {
      const Component = module[key]
      // console.log(Component);
      routes.push({
        key,
        path:"/" + key.toLocaleLowerCase(),
        component:Component
      })
    }
  }
  const router = createRouter({
    history:createWebHashHistory(),
    routes
  })
  const app = createApp(App,{routes})
  app.use(router)
  app.mount('#app')
  
})

