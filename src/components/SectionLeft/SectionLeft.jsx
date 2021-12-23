import React from 'react';
import BlockName from "./underComponents/BlockName";
import About from "./underComponents/About";
import Button from "../UI/Button";

const SectionLeft = (props) => {
    return (
        <div>
            <BlockName store={props.store.general}/>
            <About store={props.store}/>
            <Button text={props.store.work.title}/>
        </div>
    );
};

export default SectionLeft;
