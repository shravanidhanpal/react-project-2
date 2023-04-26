import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModel";
import classes from './User.module.css';
const User=(props)=>{
    const [enteredUsername,setEnteredUsername]=useState('');
    const[enteredAge,setEnteredAge]=useState('');
    const [error,setError]=useState();

    const addUserHandler=(event)=>{
        event.preventDefault();
        if(enteredUsername.trim().length===0 ||enteredAge.trim().length===0){
            setError({
                title:'invalid input',
                message:'please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if(+enteredAge<1){
            setError({
                title:'invalid age',
                message:'please enter a valid age(>1).'
            });
            return;
        }
        props.onAddUser(enteredUsername,enteredAge);
        setEnteredAge('');
        setEnteredUsername('');
    }
    const usernameChangeHandler=(event)=>{
        setEnteredUsername(event.target.value);
    };
    const ageChangeHandler=(event)=>{
        setEnteredAge(event.target.value);
    };
    const erroeHandler=()=>{
        setError (null);
    };
    return(
        <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={erroeHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username"> UserName</label>
                    <input id='username' type="text" value={enteredUsername} onChange={usernameChangeHandler}></input>
                    <label htmlFor="age"> Age (years) </label>
                    <input id='age' type="number" value={enteredAge} onChange={ageChangeHandler}></input>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};
export default User;
