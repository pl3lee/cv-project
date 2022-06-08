import React from 'react';
import '../styles/CVSection.css';
import CVExperienceItem from './CVExperienceItem';
import CVEducationItem from './CVEducationItem';
import uniqid from 'uniqid';
class CVSection extends React.Component {
  render() {
    let header;
    let sectionContents;
    if (this.props.type === 'description') {
      header = 'Description';
      sectionContents = this.props.contents;
    } else if (this.props.type === 'experiences') {
      header = 'Experiences';
      sectionContents = this.props.contents.map((exp) => {
        return <CVExperienceItem key={uniqid()} experience={exp} />;
      });
    } else if (this.props.type === 'education') {
      header = 'Education';
      sectionContents = this.props.contents.map((edu) => {
        return <CVEducationItem key={uniqid()} education={edu} />;
      });
    }
    return (
      <div className="CV-section">
        <div className="CV-section-name">{header}</div>
        <hr></hr>
        <div className="CV-section-content">{sectionContents}</div>
      </div>
    );
  }
}

export default CVSection;
