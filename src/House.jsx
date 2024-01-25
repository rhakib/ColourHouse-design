import React from 'react';

const House = ({ house }) => {
    const { name, founder, animal, houseColours } = house;
    const colors = houseColours?.split(' ')
    const color1 = colors[0].toLowerCase()
    const color2 = colors[2].toLowerCase()

    const isColorPredefined = (color) => {
        const span = document.createElement('span')
        span.style.color = color

        return span.style.color !== ""
    }

    return (
        <div style={{ width: 300, margin: '16px auto', fontFamily: 'Verdana', borderRadius: '8px', boxShadow: '0px 0px 1px' }}>
            <div style={{ padding: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2 style={{ fontSize: 18, fontWeight: 700 }}>{name}</h2>
                    <p style={{ fontSize: 12 }}>{animal}</p>
                </div>

                {isColorPredefined(color1) && isColorPredefined(color2) ?

                    <div style={{ background: `linear-gradient(to right,  ${color1}, ${color2}  100%)`, width: 280, height: 14, margin: "6px auto", borderRadius: '4px' }}>
                    </div>
                    :
                    <div style={{ background: `linear-gradient(to right, white, black  100%)`, width: 280, height: 14, margin: "6px auto", borderRadius: '4px' }}>
                    </div>
                }
                <p style={{ fontSize: 12 }}>Founder: <span style={{ fontSize: 12, fontWeight: 800 }}>{founder}</span></p>
            </div>
        </div>
    );
};

export default House;