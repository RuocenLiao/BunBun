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
                      color='rgba(203, 141, 113, 0.1)'
                      category='WEBSITE DESIGN & IMPLIMENTATION'
                      describe='An online shop for local bakery delivering love and joy to children and their families through fresh and delicious cinnamon rolls.'
                      skills='Skills: prototyping, user testing, frontend programming'
                      buttonColor='rgba(203, 141, 113, 0.42)'
                    />
                    <SquareItem 
                      src='../images/artogether.jpg'
                      text='A User Research Project'
                      label='ArTogether'
                      path='/artogether'
                      color='rgba(216, 239, 236, 0.2)'
                      category='USER RESEARCH'
                      describe='A user research project proposing an interactive public art museum that enables a shared art experience online.'
                      skills='Skills: Contextual Inquiry, Affinity Diagramming, storyboard speed-dating'
                      buttonColor='rgba(216, 239, 236, 1)'
                    />
                  
                    <SquareItem 
                      src='../images/pandabool.jpg'
                      text='A 3D Animation'
                      label='Pandabool'
                      path='/pandabool'
                      color='rgba(221, 118, 111, 0.1)'
                      category='3D ANIMATION'
                      describe='In producing a model and an animated a walk cycle, , I experienced the pipeline of 3D animation production: from design and modeling to rendering and animation.'
                      skills='Skills: Maya, zBrush, iMovie'
                      buttonColor='rgba(221, 118, 111, 0.32)'
                    />
                </ul>
            </div>
        </div>
      </div>
    );
}

export default Squares;
