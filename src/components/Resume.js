import resume from "../pages/about/Richard-Sawh-Resume.pdf";
import React from 'react';

const Resume = () => {
    //show the resume pdf
    return (
        <div className="resume">
            <iframe src={resume} title="resume" width="100%" height="100%"></iframe>
        </div>
    );
};

export default Resume;
