import React from 'react';
import Button from './Button';
import Card from './Card';
import classes from './ErrorModel.module.css';
const ErrorModel = (props) => {
    return (
        <div >
        <div className={classes.backdrop} onClick={props.onClick}></div>
            <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button type='submit' onClick={props.onClick}>Okay</Button>
            </footer>
        </Card>
        </div>
    );
}

export default ErrorModel;
