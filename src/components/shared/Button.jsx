import React from 'react';

const Button = (props) => {

    return (
            <button onClick={props.onClickHandler} className={props.style} type="text">
                {props.text}
            </button>
    );
};

export default Button;
