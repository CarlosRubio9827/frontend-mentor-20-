import React, {useState, useEffect} from 'react';
// import 'Styles/global.scss';
import 'Styles/main.scss';
import Card from 'Components/Card/Card.jsx';
import Profile from 'Components/Profile/Profile.jsx';
import ImgWork from 'Images/icon-work.svg';
import ImgPlay from 'Images/icon-play.svg';
import ImgStudy from 'Images/icon-study.svg';
import ImgExercise from 'Images/icon-exercise.svg';
import ImgSocial from 'Images/icon-social.svg';
import ImgSelfCare from 'Images/icon-self-care.svg';
import myData from './data.json';

const App = ()=>{
    let imgs = [ImgWork, ImgPlay, ImgStudy, ImgExercise, ImgSocial, ImgSelfCare];

    let colors = [
                    'hsl(15, 100%, 70%)',
                    'hsl(195, 74%, 62%)',
                    'hsl(348, 100%, 68%)',
                    'hsl(145, 58%, 55%)',
                    'hsl(264, 64%, 52%)',
                    'hsl(43, 84%, 65%)'
    ] 
    
    myData.map(function(i,j){
        i.img = imgs[j];
        i.color = colors[j];
        
    });

    let finalData = 
        myData.map((i, j)=>{
            return {
                title: i.title,
                periodo: Object.keys(i.timeframes)[0],
                current: i.timeframes.daily.current,
                previous: i.timeframes.daily.previous,
                img: imgs[j],
                color: colors[j]
            }      
        }
    )
    
    let [actual, setActual]= useState('daily');
    let [period, setPeriod] = useState(finalData);

    const changePeriod = (x)=>{
        setActual(x)
        let dataModified = period.map((i, j)=>{
            return {
                color: i.color,
                title : i.title,
                img : i.img,
                current : ((x === 'daily')
                                ? myData[j].timeframes.daily.current
                                : (x === 'monthly')
                                    ? myData[j].timeframes.monthly.current
                                    : myData[j].timeframes.weekly.current
                                    ),
                previous : ((x === 'daily')
                                ? myData[j].timeframes.daily.previous
                                : (x === 'monthly')
                                    ? myData[j].timeframes.monthly.previous
                                    : myData[j].timeframes.weekly.previous
                                    ),
                periodo : x
            }            
        })
        setPeriod(
            dataModified
            )

    }
    
    return(
    
        <main className="main">
            <Profile
                changePeriod={changePeriod}
                actual={actual}
            />
            {period.map((object, j)=>{
                return <Card 
                    obj={object} 
                    key={j}
                    id={j}
                    color={'red'}
                    actual={actual}
                />;
            })}
        </main>        
    )
}

export default App;