import React from 'react';
import './Squares.css';
import SquareItem from './SquareItem';

function Squares() {
    return (
        <div className='squares'>
        <div className='squares__container'>
            <div className='squares__wrapper'>
                <ul className='squares__items'>
                    <SquareItem 
                      src='images/bun-bun.jpg'
                      text='A Website'
                      label='Bun Bun Bake Shop'
                      path='/bun-bun'
                    />
                    <SquareItem 
                      src='../images/artogether.jpg'
                      text='A User Research Project'
                      label='ArTogether'
                      path='/artogether'
                    />
                  
                    <SquareItem 
                      src='../images/pandabool.jpg'
                      text='A 3D Animation'
                      label='Pandabool'
                      path='/pandabool'
                    />
                </ul>
            </div>
        </div>
      </div>
    );
}

export default Squares;
