import React, {useRef, useState, useEffect} from "react";
import 'Styles/card.scss';
import IconEllipsis from 'Images/icon-ellipsis.svg';

const card = (props)=>{

    const elementVariable = useRef(null)
    // let finalObject = Object.entries(props.obj.timeframes);
    useEffect(() => {
        elementVariable.current.style.backgroundColor = props.obj.color;
        // console.log(elementVariable.current), []

    } );

    // console.log(props.obj);
    
    // const [period, setPeriod] = useState(props.actual);
    // // console.log(period);
    // console.log(finalObject[0][1]);
    // // console.log(props.obj.timeframes.);
    // // Object.keys(obj)


    return (

        <article ref={elementVariable} className={`card card-${props.id}`}>
            <div  className="card-top">
                <figure>
                    {props.obj.img()}
                </figure>
            </div>
            <div className="card-bottom">
                <div className="card-bottom-left">
                    <p>{props.obj.title}</p>
                    <p>{props.obj.current}hrs</p>
                </div>
                <div className="card-bottom-right">
                    <IconEllipsis/>
                    <p
                        // onClick={example}
                    >Last {props.obj.periodo} - {props.obj.previous}hrs</p>
                </div>
            </div>
        </article>
        
        )
}

export default card;