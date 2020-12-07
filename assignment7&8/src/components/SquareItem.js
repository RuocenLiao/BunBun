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
                     >
                       <img 
                         src={props.src}
                         alt='preview the project'
                         className='squares__item__img' 
                         />
                   </figure>

                   
                </Link>
                <Link className='squares__item__link details'
                  to={props.path} 
                  style={{
                    backgroundColor: props.color
                  }}>
                   
                  <div className="squares__item__details">
                    <p className='category'>{props.category}</p>
                    <p className='label'>{props.label}</p>
                    <p className='describe'>{props.describe}</p>
                    <br/>
                    <p className='describe'>{props.skills}</p>
                    <br/>
                    <br/>
                    <span className='squares__item__button'
                        style={{
                        backgroundColor: props.buttonColor
                      }}>View Project
                    </span>
                  </div>
                         
                </Link>
            </li>  
        </>
    );
}

export default SquareItem;


/*
<div className='squares__item__info'>
                       <h5 className='squares__item__text'>{props.text}</h5>
                   </div>
                   */