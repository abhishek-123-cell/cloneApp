import React, { Component,createContext } from 'react';
import { auth,createOrGetUserProfileDocument} from '../firebase';
const InitialUserState={user:null,loading:false}

export const UserContext=createContext(InitialUserState)
class UserProvider extends Component {
         state=InitialUserState;
         async componentDidMount(){ ///lifecycle 
       auth.onAuthStateChanged(async(userAuth)=>{
console.log('yurororo',userAuth);
if(userAuth){
         const userref=await createOrGetUserProfileDocument(userAuth);
}
       });
         }
         render() {
                  return (
   <UserContext.Provider value={this.state}>
            {this.props.children}
   </UserContext.Provider>
                  )
         }
}
export default UserProvider;

