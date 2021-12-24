import React, {useState} from 'react';
import s from './SectionLeft.module.css'
import sb from '../UI/UI.module.css'
import BlockName from "./underComponents/BlockName";
import About from "./underComponents/About";
import BlockWorks from "./underComponents/BlockWorks";
import Button from "../UI/Button";
import BlockEducation from "./underComponents/BlockEducation";
import BlockProject from "./underComponents/BlockProject";

const SectionLeft = ({store}) => {
    const [workActive, setWorkActive] = useState(false)
    const [educationActive, setEducationActive] = useState(false)
    const [projectActive, setProjectActive] = useState(false)

    return (
        <section className={s.block_left}>
            <BlockName store={store.general}/>
            <About store={store}/>
            <Button onClickHandler={() => setWorkActive(!workActive)} text={store.work.title} style={sb.button1}/>
            <BlockWorks active={workActive} store={store.work}/>
            <Button onClickHandler={() => setEducationActive(!educationActive)} text={store.education.title}
                    style={sb.button1}/>
            <BlockEducation active={educationActive} store={store.education}/>
            <Button onClickHandler={() => setProjectActive(!projectActive)} text={store.project.title}
                    style={sb.button1}/>
            <BlockProject active={projectActive} project={store.project}/>
        </section>
    );
};

export default SectionLeft;


