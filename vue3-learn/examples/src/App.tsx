import { RouterLink,RouterView } from "vue-router"
import { myRouteType } from "./type"

export default (props:{routes:myRouteType[]})=>{
  return <div>welcome cck website    
    <ul>
    {props.routes.map((item)=>{
      return <li key={item.key}>
              <RouterLink to={item.path}>{item.key}</RouterLink>
              </li>
    })}
    </ul>
    
    <RouterView></RouterView>
  </div>
}