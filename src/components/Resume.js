import resume from "../pages/resume/Richard-Sawh-Resume.pdf";
import React from 'react';
import { Document, Page } from 'react-pdf';

//show the resume pdf
const Resume = () => {
    return (
        <div className="resumeContainer">
            <Document file={resume}>
                <Page pageNumber={1} />
            </Document>
        </div>
    );
}

export default Resume;
