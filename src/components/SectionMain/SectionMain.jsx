import React, {useState} from 'react';
import s from './SectionMain.module.css'
import sb from '../shared/UI.module.css'
import BlockName from "./componentsMain/BlockName";
import About from "./componentsMain/About";
import BlockWorks from "./componentsMain/BlockWorks";
import Button from "../shared/Button";
import BlockEducation from "./componentsMain/BlockEducation";
import BlockProject from "./componentsMain/BlockProject";

const SectionMain = ({store}) => {
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

export default SectionMain;


