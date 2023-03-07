import image1 from '../images/0001.jpg';
import image2 from '../images/0002.jpg';
import React from 'react';

//display the two images
const Resume = () => {
    return (
        <div className="resume">
            <img src={image1} alt="resume" />
            <img src={image2} alt="resume" />

        </div>

    );
}

export default Resume;
