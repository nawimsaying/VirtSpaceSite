// @ts-ignore
import React from 'react';
import classes from "./ListInfoBlocks.module.css";
import InfoBlock from "noUsingFiles/ui/infoBlock/InfoBlock.tsx";


const ListInfoBlocks = () => {
    return (
        <div className={classes.container}>
            <div className={classes.flex_infoblock}>
                <InfoBlock
                    spanText="Проработка технического задания."
                    description="С помощью ТЗ определяется, каким в итоге будет продукт, минимизируется количество ошибок и нейтрализуются разногласия."
                    circle1Color="rgba(77, 0, 89, 1)"
                    circle2Color="rgba(62, 1, 163, 1)"
                    framePictureSrc="../../../../public/images/OneFrameInfo.png"
                />
            </div>

            <div className={classes.flex_infoblock}>
                <InfoBlock
                    spanText="Разработка дизайна."
                    description="Распологаем блоки, главные элементы страницы и прорабатываем общую структуру сайта. Добавляем привлекательные стили."
                    circle1Color="rgba(77, 0, 89, 1)"
                    circle2Color="rgba(62, 1, 163, 1)"
                    framePictureSrc="../../../../public/images/TwoFrameInfo.png"
                />
            </div>

            <div className={classes.flex_infoblock}>
                <InfoBlock
                    spanText="Разработка сайта."
                    description="Этап, связывающий воедино систему управления, дизайн и интерфейс сайта. Прорабатываем безопасность и скорость загрузки сайта."
                    circle1Color="rgba(77, 0, 89, 1)"
                    circle2Color="rgba(62, 1, 163, 1)"
                    framePictureSrc="../../../../public/images/ThreeFrameInfo.png"
                />
            </div>

            <div className={classes.flex_infoblock}>
                <InfoBlock
                    spanText="Загрузка сайта на хостинг."
                    description="Мы загрузим Ваш сайт на хостинг, чтобы он был доступен другим пользователям."
                    circle1Color="rgba(77, 0, 89, 1)"
                    circle2Color="rgba(62, 1, 163, 1)"
                    framePictureSrc="../../../../public/images/FourFrameInfo.png"
                />
            </div>
        </div>
    );
};

export default ListInfoBlocks;