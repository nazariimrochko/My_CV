import React from 'react';
import s from './UI.module.css'

const Button = (props) => {

    const showBox = (e) => {
        e.preventDefault()

    }

    return (
        <div>
            <button onClick={{showBox}} className={s.button1} type="text">{props.text}</button>
        </div>
    );
};

export default Button;
