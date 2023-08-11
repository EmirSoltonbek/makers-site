import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '../../assets/star.svg'
import BigStarIcon from '../../assets/bigstar.svg'
import '../reviewss/Reviews.css'
import Feedback from '../feedback/Feedback';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    
  },
  imageList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  
}));



 const itemData = [
  {
    name:'Айпери Дастанова',
    comment:'Отучилась на курс Питон Бэкенд. Благодарю Мэйкерс на такую возможность. Отличный проект для школьников. Всем советую!',
    starCount:2,
  },
  {
    name:'Нурсултан Шукуров',
    comment:'Салам. Мен JS курсун аяктадым. Баары жакшы.Негизи проект жакшы ойлонулган, бироквидео сабактарда кээде тушунбой калып аттым',
    starCount:2,
  },
  {
    name:'Айпери Дастанова',
    comment:'Отучилась на курс Питон Бэкенд. Благодарю Мэйкерс на такую возможность. Отличный проект для школьников. Всем советую!',
    starCount:2,
  },
  {
    name:'Айпери Дастанова',
    comment:'Отучилась на курс Питон Бэкенд. Благодарю Мэйкерс на такую возможность. Отличный проект для школьников. Всем советую!',
    starCount:2,
  }
 ];
 
export default function Reviews() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className='container'>
        <h2 className='reviews-head'>Отзывы наших студентов</h2>
        </div>
    <div className='container reviews-bigblock'>
<div className="reviews-left-side">
  <div className="big">
      <ImageList className={classes.imageList} cols={2.05}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
        <div className='comment-block'>
            <h4>{item.name}</h4>
            <h6>{item.comment}</h6>
            <div className='reviews-stars'>
                <span><img src={StarIcon} alt=""/></span>
                <span><img src={StarIcon} alt=""/></span>
                <span><img src={StarIcon} alt=""/></span>
                <span><img src={StarIcon} alt=""/></span>
                <span><img src={StarIcon} alt=""/></span>
            </div>
        </div>
          </ImageListItem>
        ))}
      </ImageList>
      </div>
      <div className="small">
      <ImageList className={classes.imageList} cols={1.2}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
        <div className='comment-block'>
            <h4>{item.name}</h4>
            <h6>{item.comment}</h6>
            <div className='reviews-stars'>
                <span><img src={StarIcon} alt=""/></span>
                <span><img src={StarIcon} alt=""/></span>
                <span><img src={StarIcon} alt=""/></span>
                <span><img src={StarIcon} alt=""/></span>
                <span><img src={StarIcon} alt=""/></span>
            </div>
        </div>
          </ImageListItem>
        ))}
      </ImageList>
      </div>
      <div>
        <form action="" className='send-comment-form'>
          <div style={{display:"flex", flexDirection:"column"}}>
            <label htmlFor="">Оставить отзыв</label>
            <textarea name="" id="" cols="47" rows="6"></textarea>
          </div>
          <div style={{display:"flex", flexDirection:"column", width:"232px",justifyContent:"space-between"}}>
            <label htmlFor="">Оценить проект</label>
          <div className='reviews-bigstars'>
                <span><img src={BigStarIcon} alt=""/></span>
                <span><img src={BigStarIcon} alt=""/></span>
                <span><img src={BigStarIcon} alt=""/></span>
                <span><img src={BigStarIcon} alt=""/></span>
                <span><img src={BigStarIcon} alt=""/></span>
            </div>
            <button>Отправить</button>
          </div>
        </form>
      </div>
      </div>        
      <div className="reviews-right-side">
        <Feedback/>
      </div>
    </div>
 </div>
  );
}
