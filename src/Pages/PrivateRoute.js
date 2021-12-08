import React from 'react'
import { Navigate, Route } from 'react-router'



export default function PrivateRoute({children,...rest}) {
    
      const auth=false;
        return (<Route {...rest} render={()=> auth?(children):(<Navigate to={'/login'}/>)}/>)
    
}
