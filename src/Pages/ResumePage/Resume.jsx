import React, { useState } from "react";
import { Document, Page } from 'react-pdf';
import resumeImage1 from "../../assets/resume_photo1.jpg";
import resumeImage2 from "../../assets/resume_photo2.jpg";
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

import "./Resume.css";


const Resume = () => {
  const [scaleValue, setScaleValue] = useState(1.5);
  return (
    <div >
      <div className="resume-container">
        <div className="document-container">
          <Document className="pdf-document" file={"/my-website/assets/MaxSchaeferResume.pdf"}>
            <Page pageNumber={1} scale={scaleValue} />
            <div className="scale-container">
              <button className="scale-button" onClick={() => setScaleValue((prev) => Math.min(prev + 0.1, 3))}>+</button>
              <button className="scale-button" onClick={() => setScaleValue((prev) => Math.max(prev - 0.1, 0.5))}>-</button>
            </div>
          </Document>
        </div>
        
        <div className="img-container">
          <img className="resume-image" src={resumeImage1} alt="Resume Preview 1" />
          <img className="resume-image" src={resumeImage2} alt="Resume Preview 2" />
        </div>
      </div>
      <a className="download-link" href="/my-website/assets/MaxSchaeferResume.pdf" download>Download Resume (PDF)</a>
    </div>
  )

};

export default Resume;
