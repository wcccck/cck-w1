import './style.css'
import {myRouteType} from './myRouteType'
import { RouterLink,RouterView } from 'vue-router'
export default (props:{
  routes:myRouteType[]
})=>{
  return <div>
    <header>cck socialize websize</header>
    <main>
      <div class="left">
        <ul>
          { props.routes.map(({key,path})=>{
              return <li key={key}> <RouterLink to={path}>{key}</RouterLink></li>
            })
          }
        </ul>
      </div>
      <div class='right'>
        <RouterView></RouterView>
      </div>
      
    </main>
    
    
  </div>
}