import React from 'react'
import PythonLogo from '../../assets/python.png';
import JsLogo from '../../assets/js.png'
import FlLogo from '../../assets/vl.png'
import FigmaLogo from '../../assets/figma.png'
import AppleLogo from '../../assets/apple.png'
import AndroidLogo from '../../assets/android.png'
import TimeIcon from '../../assets/time.svg'
import WalletIcon from '../../assets/wallet.svg'
import DataIcon from '../../assets/data.svg'
import CameraIcon from '../../assets/camera.svg'
import FavoriteIcon from '../../assets/favorite.svg'
import '../schedules/Schedules.css'
import { Apple } from '@material-ui/icons';

const schedules = [
    {
        image:PythonLogo,
        group:'Python (вечерная группа)',
        text:'Python - отличный выбор для начинающих, благодаря своей простоте, эффективности и широкому спектру применения.',
        durationCount:'7 месяцев',
        lecturesCount:'120',
        start:'10.10.2023',
        price:'3500 som'
    },
    {
        image:JsLogo,
        group:'Python (вечерная группа)',
        text:'Python - отличный выбор для начинающих, благодаря своей простоте, эффективности и широкому спектру применения.',
        durationCount:'7 месяцев',
        lecturesCount:'120',
        start:'10.10.2023',
        price:'3500 som'
    },
    {
        image:FlLogo,
        group:'Python (вечерная группа)',
        text:'Python - отличный выбор для начинающих, благодаря своей простоте, эффективности и широкому спектру применения.',
        durationCount:'7 месяцев',
        lecturesCount:'120',
        start:'10.10.2023',
        price:'3500 som'
    },
    {
        image:FigmaLogo,
        group:'Python (вечерная группа)',
        text:'Python - отличный выбор для начинающих, благодаря своей простоте, эффективности и широкому спектру применения.',
        durationCount:'7 месяцев',
        lecturesCount:'120',
        start:'10.10.2023',
        price:'3500 som'
    },
    {
        image:AppleLogo,
        group:'Python (вечерная группа)',
        text:'Python - отличный выбор для начинающих, благодаря своей простоте, эффективности и широкому спектру применения.',
        durationCount:'7 месяцев',
        lecturesCount:'120',
        start:'10.10.2023',
        price:'3500 som'
    },
    {
        image:AndroidLogo,
        group:'Python (вечерная группа)',
        text:'Python - отличный выбор для начинающих, благодаря своей простоте, эффективности и широкому спектру применения.',
        durationCount:'7 месяцев',
        lecturesCount:'120',
        start:'10.10.2023',
        price:'3500 som'
    },

]

const Schedules = () => {
  return (
    <div className='container'>
        <div>
            <h1 className='newSchedules'>Расписание новых курсов</h1>
        </div>
    <div className='contain'>
        {schedules.map((item,index)=>(
            <div className='card'>
                <div className='favorite-icon'>
                    <img src={FavoriteIcon} alt="" />
                </div>
                <img className='card-image' src={item.image} alt="" />
                <h3>{item.group}</h3>
                <p>{item.text}</p>
                <div style={{display:'flex',alignItems:'center', marginBottom:"10px" }}>
                    <img src={TimeIcon} alt="" />
                    <div className='info'>Продолжительность: </div>
                    <div className='info-text'>{item.durationCount}</div>
                </div>

                <div style={{display:'flex',alignItems:'center', marginBottom:"10px" }}>
                    <img src={CameraIcon} alt="" />
                    <div className='info'>Колличество видео-лекций: </div>
                    <div className='info-text'>{item.lecturesCount}</div>
                </div>

                <div style={{display:'flex', alignItems:'center', marginBottom:"10px" }}>
                    <img src={DataIcon} alt="" />
                    <div className='info'>Дата запуска курса: </div>
                    <div className='info-text'>{item.start}</div>
                </div>

                <div style={{display:'flex',alignItems:'center', marginBottom:"10px" }}>
                    <img src={WalletIcon} alt="" />
                    <div className='info'>Стоимость курса: </div>
                    <div className='info-text'>{item.price}</div>
                </div>
                <button className='card-btn'>Записаться</button>
            </div>
        ))}
    </div>
    </div>
  )
}

export default Schedules