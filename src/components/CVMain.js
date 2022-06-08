import React from 'react';
import '../styles/CVMain.css';
import CVSection from './CVSection';
class CVMain extends React.Component {
  render() {
    return (
      <div className="CV-main">
        <CVSection
          contents={this.props.personalInfo.description}
          type="description"
        />
        <CVSection contents={this.props.experiences} type="experiences" />
      </div>
    );
  }
}

export default CVMain;
