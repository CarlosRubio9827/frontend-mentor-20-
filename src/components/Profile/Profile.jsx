import React, {useState, useEffect} from "react";
import 'Styles/profile.scss';
import imgProfile from 'Images/image-jeremy.png';

const profile = (props)=>{

    // console.log(props.changePeriod);
    // props.changePeriod(12)
    // console.log(props.actual);
    
    
    const changeP = (event)=>{
        let text = event.currentTarget.innerText.toLowerCase();
        props.changePeriod(text);
    }

    
    return (
        <article className="profile">
            <div className="profile-top">
                <img src={imgProfile}/>
                <div className="profile-top-title">
                    <p>Report for</p>
                    <p>Jeremy Robson</p>
                </div>
            </div>
            <div className="profile-bottom">
                <ul>
                    <li>
                        <a  
                            className={`${(props.actual==='daily')? 'active': ''}`}
                            
                            href="#"
                            onClick={changeP}
                        >Daily
                        </a>
                    </li>
                    <li>
                        <a 
                            className={`${(props.actual==='weekly')? 'active': ''}`}
                            href="#"
                            onClick={changeP}
                        >Weekly
                        </a>
                    </li>
                    <li>
                        <a 
                            className={`${(props.actual==='monthly')? 'active': ''}`}
                            href="#"
                            onClick={changeP}
                        >Monthly
                        </a>
                    </li>
                </ul>
            </div>
        </article>
    )
}

export default profile;