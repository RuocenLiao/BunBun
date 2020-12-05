import React from 'react';
import { Link } from 'react-router-dom'
import './Squares.css';

function SquareItem(props) {
    return (
        <>
            <li className='squares__item'>
                <Link className='squares__item__link'
                  to={props.path}>
                   <figure className='squares__item__pic-wrap'
                     data-category={props.label}>
                       <img 
                         src={props.src}
                         alt='preview the project'
                         className='squares__item__img' 
                         />
                   </figure>
                   <div className='squares__item__info'>
                       <h5 className='squares__item__text'>{props.text}</h5>
                   </div>
                </Link>
            </li>  
        </>
    );
}

export default SquareItem;
