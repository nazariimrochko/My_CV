import React, {useState} from 'react';
import BlockName from "./underComponents/BlockName";
import About from "./underComponents/About";
import BlockWorks from "./underComponents/BlockWork/BlockWorks";
import Button from "../UI/Button";

const SectionLeft = ({store}) => {
    const [workActive, setWorkActive] = useState(false)

console.log(workActive)
    return (
        <div>
            <BlockName store={store.general}/>
            <About store={store}/>
            <Button onClickHandler={() => setWorkActive(!workActive)} text={store.work.title}/>
            <BlockWorks active={workActive}  store={store.work}/>
        </div>
    );
};

export default SectionLeft;


