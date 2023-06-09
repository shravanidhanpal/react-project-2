import React,{useState} from 'react';
import User from './components/Users/User';
import UserList from './components/Users/UserList';
import './App.css';
function App(){
    const [usersList,setUsersList]=useState([]);
    const addUserHandler=(uName,uAge,uCollegename)=>{
        setUsersList((prevUsersList)=>{
            return [...prevUsersList, { name:uName,age:uAge,id:Math.random().toString(), Collegename:uCollegename}]
        });
    };
    return(
        <React.Fragment>
            <User onAddUser={addUserHandler}/>
            <UserList users={usersList}/>
        </React.Fragment>
    )

}
export default App;
