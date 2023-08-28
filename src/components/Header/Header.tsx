import React from 'react';
import s from './Header.module.css'

type HeaderPropsType = {
    text: string;
}

const Header = (props: HeaderPropsType) => {
    const {text}= props
    return (
        <header >
            <div className={s.container}>
                <h2>{text}</h2>
            </div>
        </header>
    );
};

export default Header;
