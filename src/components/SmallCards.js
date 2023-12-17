import React from 'react'


export default function Cards(props) {
     return (
        <article className='flex card-item'>
           <div className='col'>
              <h4 className='gray'>{props.item.Title}</h4>
              <img src={props.item.icon}/>
           </div>
           <div className='col'>
             <h4 className='price'>{props.item.data}</h4>
            <div  className={props.item.txtColor}>
                <img src={props.item.updownIcon}/>
                <p>{props.item.valor}</p>
            </div>
           </div>
        </article>
     )
}