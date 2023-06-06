import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';

const Header = () => {
    const {user, onClose} = useTelegram();


    const getRequest=()=>{
        axios.get('http://89.223.31.99:8000/web-data')
  .then(response => {
    // Обработка успешного ответа
    console.log(response.data);
  })
  .catch(error => {
    // Обработка ошибки
    console.error(error);
  });
    }

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <Button onClick={getRequest}>get запрос</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;
