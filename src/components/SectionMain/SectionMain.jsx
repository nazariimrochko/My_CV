import React, {useState} from 'react';
import s from './SectionMain.module.css'
import sb from '../shared/Button.module.css'
import BlockName from "./componentsMain/BlockName";
import About from "./componentsMain/About";
import Button from "../shared/Button";
import ContentBox from "./componentsMain/ContentBox";


const SectionMain = ({store}) => {
    const [active, setActive] = useState({})

    const getContentBox = [store.work, store.education, store.project].map((item, index) => {

        const setActiveHandler = () => {
            setActive({...active, ...{[index]: !active[index]}})
        }
        return (
            <div key={index}>
                <Button onClickHandler={setActiveHandler} text={item.title}
                        style={sb.button1}/>
                <ContentBox active={active[index]} content={item}/>
            </div>
        )

    })

    return (
        <section className={s.block_left}>
            <BlockName store={store.general}/>
            <About store={store}/>
            {getContentBox}
        </section>
    );
};

export default SectionMain;


