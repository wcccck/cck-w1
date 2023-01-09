import './style.css'
import {myRouteType} from './myRouteType'
export default (props:{
  routes:myRouteType[]
})=>{
  return <div>
    <header>cck socialize websize</header>
    <main>
      <div class="left">
        <ul>
          {
            props.routes.map(({key,path})=>{
              return <li>
                      <routerLink to={path}>{key}</routerLink>
                      </li>
            })
          }
        </ul>
      </div>
      <div class='right'>
        <routerView></routerView>
      </div>
      
    </main>
    
    
  </div>
}