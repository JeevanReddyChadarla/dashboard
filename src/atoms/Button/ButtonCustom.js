import React from 'react';
import style from './ButtonCustom.module.scss';
import { Button } from 'antd';

const ButtonCustom = (props) => {
    const {text,variant} = props;
    return (
        <div className={style['button']} data-test="button">
           <Button type={variant}>
               <p>{text}</p>
           </Button>
        </div>
    );
};

export default ButtonCustom;