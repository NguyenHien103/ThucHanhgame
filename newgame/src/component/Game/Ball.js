import React from 'react';
import './Ball.css';

const Ball = ({ id, onClick }) => {
    const randomPosition = () => {
        const size = 60; // Kích thước bóng
        const maxPosition = 800 - size; // Vị trí tối đa để không tràn ra ngoài

        const x = Math.floor(Math.random() * maxPosition);
        const y = Math.floor(Math.random() * maxPosition);

        return { left: `${x}px`, top: `${y}px` };
    };

    const style = randomPosition();

    console.log('Ball position:', style); // Xem xét giá trị của style để kiểm tra vị trí

    return (
        <div
            className="ball"
            style={style}
            onClick={() => onClick(id)}
        >
            {id}
        </div>
    );
};
export default Ball