import { createApp } from 'vue'
import App from './App'
import { RouteRecordRaw,createRouter,createWebHashHistory } from 'vue-router'

type myRouteType = RouteRecordRaw & {
  key:string
}
const routes:myRouteType = []

const examples = import.meta.glob("./examples/**/*.tsx")
const examplePrimise = Object.keys(examples) // get all key
.map(x=>examples[x]) // use key get valueComponent
.map(x=>x()) // call valueComponent function
Promise.all(examplePrimise)
  .then(list=>{
  for(let module of list){
    for (let key in module) {
      const Component = module[key]
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
  const app = createApp(App)
  app.mount('#app')
  app.use(router)
  
})

