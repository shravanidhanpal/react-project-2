import React, { useState,useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModel";
import Wrapper from "../Helpers/Wrapper";
import classes from './User.module.css';
const User=(props)=>{
    const nameInputRef=useRef();
    const ageInputRef=useRef();
    const collegenameInputRef=useRef();
    const [error,setError]=useState();

    const addUserHandler=(event)=>{
        event.preventDefault();
        const enteredName=nameInputRef.current.value;
        const enteredUserAge=ageInputRef.current.value;
        const enteredCollegename=collegenameInputRef.current.value;
        if(enteredName.trim().length===0 ||enteredUserAge.trim().length===0 ||enteredCollegename.trim().length===0){
            setError({
                title:'invalid input',
                message:'please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if(+enteredUserAge<1){
            setError({
                title:'invalid age',
                message:'please enter a valid age(>1).'
            });
            return;
        }
        props.onAddUser(enteredName,enteredUserAge,enteredCollegename);
        nameInputRef.current.value='';
        ageInputRef.current.value='';
        collegenameInputRef.current.value='';
    }
    
    const erroeHandler=()=>{
        setError (null);
    };
    return(
        <Wrapper>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={erroeHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username"> UserName</label>
                    <input id='username' type="text" ref={nameInputRef}></input>
                    <label htmlFor="age"> Age (years) </label>
                    <input id='age' type="number" ref={ageInputRef}></input>
                    <label htmlFor='collegename'>College-Name</label>
                    <input id='collegename' type='text' ref={collegenameInputRef}></input> 
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};
export default User;
