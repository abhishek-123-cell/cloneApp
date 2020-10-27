import React, { Component,createContext } from 'react';
const InitialUserState={user:null,loading:false}

export const UserContext=createContext(InitialUserState)
class UserProvider extends Component {
         render() {
                  return (
                           <div>
                                    
                           </div>
                  )
         }
}
