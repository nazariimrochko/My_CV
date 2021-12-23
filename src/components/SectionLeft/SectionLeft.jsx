import React, {useState} from 'react';
import BlockName from "./underComponents/BlockName";
import About from "./underComponents/About";
import BlockWorks from "./underComponents/BlockWork/BlockWorks";
import Button from "../UI/Button";

const SectionLeft = (props) => {
    const [workActive, setWorkActive] = useState(false)

    return (
        <div>
            <BlockName store={props.store.general}/>
            <About store={props.store}/>
            <Button onClick={() => setWorkActive(!workActive)} text={props.store.work.title}/>
            <BlockWorks active={workActive} setActive={setWorkActive} store={props.store.work}/>
        </div>
    );
};

export default SectionLeft;


