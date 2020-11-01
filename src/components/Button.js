import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);

function Button(props) {
    const { color, bgColor, icon, children } = props;

    const palette = {
        turquoise: '#1abc9c',
        emerald: '#2ecc71',
        peterRiver: '#3498db',
        amethyst: '#9b59b6',
        wetAsphalt: '#34495e',
        greenSea: '#16a085',
        nephritis: '#27ae60',
        belizeHole: '#2980b9',
        wisteria: '#8e44ad',
        midnightBlue: '#2c3e50',
        sunFlower: '#f1c40f',
        carrot: '#e67e22',
        alizarin: '#e74c3c',
        clouds: '#ecf0f1',
        concrete: '#95a5a6',
        orange: '#f39c12',
        pumpkin: '#d35400',
        pomegranate: '#c0392b',
        silver: '#bdc3c7',
        asbestos: '#7f8c8d'
    }

    const styles = {
        border: 0,
        padding: '10px 20px',
        color: palette[`${color}`],
        backgroundColor: palette[`${bgColor}`]
    }

    return (
        <button style={styles}><FontAwesomeIcon icon={['fas', icon]} /><span>{children}</span></button>
    );
}

Button.defaultProps = {
    bgColor: 'alizarin',
    color: 'clouds',
    children: 'Just Click',
    icon: 'user'
};

export default Button;