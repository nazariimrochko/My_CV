import React, {useState} from 'react';
import s from './SectionRight.module.css'
import BlockPhoto from "./underComponents/BlockPhoto";
import Button from "../UI/Button";
import sb from "../UI/UI.module.css";
import SectionList from "./underComponents/SectionList";

const SectionRight = ({store}) => {
    const [techActive, setTechActive] = useState(false)
    const [personalActive, setPersonalActive] = useState(false)

    return (
        <section className={s.content_wrap}>
            <BlockPhoto store={store}/>
            <Button text={store.contact.title} style={sb.button2}/>
            <Button text={store.languages.title} style={sb.button2}/>
            <Button onClickHandler={() => setTechActive(!techActive)} text={store.techSkills.title} style={sb.button2}/>
            <SectionList active={techActive} personInfo={store.techSkills}/>
            <Button onClickHandler={() => setPersonalActive(!personalActive)} text={store.personalSkills.title}
                    style={sb.button2}/>
            <SectionList active={personalActive} personInfo={store.personalSkills}/>
        </section>
    );
};

export default SectionRight;
