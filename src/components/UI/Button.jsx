import React from 'react';
import s from './UI.module.css'

const Button = (props) => {

    return (
        <div>
            <button onClick={props.onClickHandler} className={s.button1} type="text">{props.text}</button>
        </div>
    );
};

export default Button;
