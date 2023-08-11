import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import MentorImage1 from '../../assets/mentor1.png';
import MentorImage2 from '../../assets/mentor2.png';
import MentorImage3 from '../../assets/mentor3.png';
import './Mentors.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#2B59C3',
    marginTop: '4rem',
    paddingBottom: "3.5rem"
  },
  imageList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  
}));



 const itemData = [
   {
    img: MentorImage1,
    name: 'Вадим Паскурин',
    direction: 'Ментор JS',
  },
   {
    img: MentorImage2,
    name: 'Айсулуу Асанова',
    direction: 'Ментор UX/UI дизайн',
   },
   {
    img: MentorImage3,
    name: 'Айбек Аскаров',
    direction: 'Ментор Python',
   },
   {
    img: MentorImage1,
    name: 'Вадим Паскурин',
    direction: 'Ментор JS',
  },
   {
    img: MentorImage2,
    name: 'Айсулуу Асанова',
    direction: 'Ментор UX/UI дизайн',
   },
   {
    img: MentorImage3,
    name: 'Айбек Аскаров',
    direction: 'Ментор Python',
   }
 ];
 
export default function Mentors() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className='container'>
        <h2 className='mentors-head'>Наши ментора</h2>
        </div>
    <div className='container first' >
      <ImageList className={classes.imageList} cols={3.05}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
        <div className='mentor-card'>
            <div className='mentor-img'>
            <img src={item.img} alt=""/>
            <h3>{item.name}</h3>
            <h5>{item.direction}</h5>
            </div>
        </div>
          </ImageListItem>
        
        ))}
      </ImageList>
    </div>
    <div className='container second' >
      <ImageList className={classes.imageList} cols={2.5}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
        <div className='mentor-card'>
            <div className='mentor-img'>
            <img src={item.img} alt=""/>
            <h3>{item.name}</h3>
            <h5>{item.direction}</h5>
            </div>
        </div>
          </ImageListItem>
        
        ))}
      </ImageList>
    </div>
    <div className='container third'>
      <ImageList className={classes.imageList} cols={1.5}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
        <div className='mentor-card'>
            <div className='mentor-img'>
            <img src={item.img} alt=""/>
            <h3>{item.name}</h3>
            <h5>{item.direction}</h5>
            </div>
        </div>
          </ImageListItem>
        
        ))}
      </ImageList>
    </div>
    <div className='container four'>
      <ImageList className={classes.imageList} cols={1.2}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
        <div className='mentor-card'>
            <div className='mentor-img'>
            <img src={item.img} alt=""/>
            <h3>{item.name}</h3>
            <h5>{item.direction}</h5>
            </div>
        </div>
          </ImageListItem>
        
        ))}
      </ImageList>
    </div>
    <div className='container five'>
      <ImageList className={classes.imageList} cols={1}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
        <div className='mentor-card'>
            <div className='mentor-img'>
            <img src={item.img} alt=""/>
            <h3>{item.name}</h3>
            <h5>{item.direction}</h5>
            </div>
        </div>
          </ImageListItem>
        
        ))}
      </ImageList>
    </div>
 </div>
  );
}
