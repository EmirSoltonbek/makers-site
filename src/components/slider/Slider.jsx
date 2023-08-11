import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../slider/Slider.css'
import FirstSlideBackground from '../../assets/Rectangle1.jpg'
import SecondSlideBackground from '../../assets/Rectangle2.jpg'
import ThirdSlideBackground from '../../assets/Rectangle3.jpg'
import Clip1 from '../../assets/clip1.png'
import Clip2 from '../../assets/clip2.png'

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{position:"relative", height:"609px"}}>
      <Carousel.Item>
        <img src={FirstSlideBackground} alt="" />
        <div className='slide-inside'>
            <div className='left-side'>
                <h2 className='h2-1'>Как мы будем обучать тебя?</h2>
                <p className='p1'>
                На наших курсах мы хотим предоставить 
тебе не только теоретические знания, 
но и ценный практический опыт.
                </p>
                <button>Записаться</button>
            </div>
            <div className='right-side'>
                <img src={Clip1} alt="" />
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img src={SecondSlideBackground} alt="" />
        <div className='slide-inside'>
            <div className='left-side'>
                <h2 className='h2-2'>Не упусти возможность 
определить свое 
будущее в IT</h2>
                <p className='p2'>
                Мы собрали 5 главных причин, почему 
тебе стоит пойти на недельный курс
                </p>
                <button>Записаться</button>
            </div>
            <div className='right-side'>
                <img src={Clip2} alt="" />
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ThirdSlideBackground} alt="" />
        <div className='slide-inside'>
            <div className='left-side'>
                <h2 className='h2-3'>Хочешь получить доступ 
к курсу для начинающих 
БЕСПЛАТНО?</h2>
                <p className='p3'>
                На наших курсах мы хотим предоставить 
тебе не только теоретические знания, 
но и ценный практический опыт.
                </p>
                <button>Записаться</button>
            </div>
            <div className='right-side'>
                <img src={Clip1} alt="" />
            </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;