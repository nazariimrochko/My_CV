import React, {useState} from 'react';
import BlockName from "./underComponents/BlockName";
import About from "./underComponents/About";
import BlockWorks from "./underComponents/BlockWork/BlockWorks";
import Button from "../UI/Button";
import BlockEducation from "./underComponents/BlockEducation";
import BlockProject from "./underComponents/BlockProject";

const SectionLeft = ({store}) => {
    const [workActive, setWorkActive] = useState(false)
    const [educationActive, setEducationActive] = useState(false)
    const [projectActive, setProjectActive] = useState(true)

console.log(workActive)
    return (
        <div>
            <BlockName store={store.general}/>
            <About store={store}/>
            <Button onClickHandler={() => setWorkActive(!workActive)} text={store.work.title}/>
            <BlockWorks active={workActive} store={store.work}/>
            <Button onClickHandler={() => setEducationActive(!educationActive)} text={store.education.title}/>
            <BlockEducation active={educationActive} store={store.education} />
            <Button onClickHandler={() => setProjectActive(!projectActive)} text={store.project.title}/>
            <BlockProject active={projectActive} project={store.project} />
        </div>
    );
};

export default SectionLeft;


