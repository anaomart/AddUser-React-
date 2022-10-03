import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModel from '../UI/ErrorModel';
const AddUser = props => {
    const [username, setUsername] = useState('')
    const [age, setAge] = useState('');
    const [error, setError] = useState('');
    const addUserHandler = (event) => {
        event.preventDefault();
        if (username.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: "Please enter a username or password (none-empty values)"
            })
            return;
        }
        if (age <= 0) {
            setError({
                title: 'Invalid Age',
                message: "Please enter a valid age (age > 0)"
            })
            return;
        }
        props.onAddUser(username, age)
        setUsername('');
        setAge('');
        console.log(username, age)
    }
    const usernameChangedHandler = (event) => {
        setUsername(event.target.value);
    }
    const ageChangedHandler = (event) => {
        setAge(event.target.value);
    }
    const errorModelHandler = (event) => {
        console.log('workbox')
        setError(null);
    }
    return (
        <div>
            {error && <ErrorModel onClick={errorModelHandler} title={error.title} message={error.message} />}        <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input id='username' type='text' value={username} onChange={usernameChangedHandler} />
                    <label htmlFor='age'>Age (Years)</label>
                    <input id='age' type='number' value={age} onChange={ageChangedHandler} />
                    <Button type='submit'>AddUser</Button>
                </form>
            </Card>
        </div>
    )

}

export default AddUser;