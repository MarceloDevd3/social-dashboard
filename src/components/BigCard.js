import React from 'react';

export default function Card(props) {
      return (
        <div className={props.item.bgBorder}>
          <article className='card card-item'>
           <div className='row'>
             <img className='icon' src={props.item.Img} />
             <span className='gray'>{props.item.Email}</span>
           </div>
           <h2 className='card-title'>{props.item.Data} <span className='Small-txt'>{props.item.Data2}</span></h2>
           <span className={props.item.txtColor}> <img src={props.item.icon} /> {props.item.Today}  </span>
        </article>
        </div>
      )
}