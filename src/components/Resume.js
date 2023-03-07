import resume from "../pages/resume/Richard-Sawh-Resume.pdf";
import React from 'react';
import { Document, Page } from 'react-pdf';

//displau the resume in a pdf viewer
const Resume = () => {
    return (
        <div className="resumePage">
            <Document file={resume}>
                <Page pageNumber={1} />
            </Document>
        </div>
    );
}

export default Resume;
