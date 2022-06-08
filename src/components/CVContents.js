import React from 'react';
import '../styles/CVContents.css';
import CVSidebar from './CVSidebar';
import CVMain from './CVMain';
class CVContents extends React.Component {
  render() {
    return (
      <div className="CV-contents">
        <CVMain
          personalInfo={this.props.personalInfo}
          experiences={this.props.experiences}
          education={this.props.education}
        />
        <CVSidebar personalInfo={this.props.personalInfo} />
      </div>
    );
  }
}

export default CVContents;
