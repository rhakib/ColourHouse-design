import React from 'react';

const House = ({ house }) => {
    const { name, founder, animal, houseColours } = house;
    const colors = houseColours?.split(' ')
    const color1 = colors[0]
    const color2 = colors[2]

    const isColorPredefined = (color) => {
        const span = document.createElement('span')
        span.style.color = color

        return span.style.color !== ""
    }

    return (
       
            <div className='contentBox'>
                <div className='upperText'>
                    <h2>{name}</h2>
                    <p>{animal}</p>
                </div>

                {isColorPredefined(color1) && isColorPredefined(color2) ?

                    <div className='colors' style={{ background: `linear-gradient(to right,  ${color1}, ${color2}  100%)` }}>
                    </div>
                    :
                    <div className='colors' style={{ background: `linear-gradient(to right, white, black  100%)`}}>
                    </div>
                }
                <p className='founderText'>Founder: <span>{founder}</span></p>
            </div>
        
    );
};

export default House;