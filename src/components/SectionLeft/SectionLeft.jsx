import React from 'react';
import BlockName from "./underComponents/BlockName";
import About from "./underComponents/About";
import Button from "../UI/Button";
import BlockWorks from "./underComponents/BlockWorks";

const SectionLeft = (props) => {
    return (
        <div>
            <BlockName store={props.store.general}/>
            <About store={props.store}/>
            <Button text={props.store.work.title}/>
            <BlockWorks store={props.store.work}/>
            <Button text={props.store.education.title}/>
        </div>
    );
};

export default SectionLeft;
