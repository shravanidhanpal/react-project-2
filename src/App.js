import React,{useState} from 'react';
import User from './components/Users/User';
import UserList from './components/Users/UserList';
import './App.css';
function App(){
    const [usersList,setUsersList]=useState([]);
    const addUserHandler=(uName,uAge)=>{
        setUsersList((prevUsersList)=>{
            return [...prevUsersList, { name:uName,age:uAge,id:Math.random().toString()}]
        });
    };
    return(
        <div>
            <User onAddUser={addUserHandler}/>
            <UserList users={usersList}/>
        </div>
    )

}
export default App;
