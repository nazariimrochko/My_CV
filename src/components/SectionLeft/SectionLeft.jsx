import React, {useState} from 'react';
import BlockName from "./underComponents/BlockName";
import About from "./underComponents/About";
import BlockWorks from "./underComponents/BlockWork/BlockWorks";
import Button from "../UI/Button";
import BlockEducation from "./underComponents/BlockEducation";
import BlockProject from "./underComponents/BlockProject";

const SectionLeft = (props) => {
    const [workActive, setWorkActive] = useState(false)
    const [educationActive, setEducationActive] = useState(false)
    const [projectActive, setProjectActive] = useState(true)

    return (
        <div>
            <BlockName store={props.store.general}/>
            <About store={props.store}/>
            <Button onClickHandler={() => setWorkActive(!workActive)} text={props.store.work.title}/>
            <BlockWorks active={workActive} store={props.store.work}/>
            <Button onClickHandler={() => setEducationActive(!educationActive)} text={props.store.education.title}/>
            <BlockEducation active={educationActive} store={props.store.education} />
            <Button onClickHandler={() => setProjectActive(!projectActive)} text={props.store.project.title}/>
            <BlockProject active={projectActive} project={props.store.project} />
        </div>
    );
};

export default SectionLeft;


