import React, {useState} from 'react';
import s from './SectionNav.module.css'
import BlockPhoto from "./componentsNav/BlockPhoto";
import Button from "../shared/Button";
import sb from "../shared/Button.module.css";
import SectionList from "./componentsNav/SectionList";
import BlockInfo from "./componentsNav/BlockInfo";

const SectionNav = ({store}) => {
    const [active, setActive] = useState({})

    const detailsSection = store.details.map((item, index, array) => {
        const setActiveHandler = () => {
            setActive({...active, ...{[index]: !active[index]}})
        }

        return (
            <div key={index}>
                <Button onClickHandler={setActiveHandler} text={item.title}
                        style={sb.button2}/>
                <SectionList active={active[index]} personInfo={item.items}/>
            </div>
        )
    })

    return (
        <section className={s.content_wrap}>
            <BlockPhoto store={store}/>
            <Button text={store.contact.title} style={sb.title}/>
            <BlockInfo personInfo={store.contact}/>
            <Button text={store.languages.title} style={sb.title}/>
            <SectionList active={true} personInfo={store.languages.items}/>
            {detailsSection}
        </section>
    );
};

export default SectionNav;
