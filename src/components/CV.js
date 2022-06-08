import React from 'react';
import '../styles/CV.css';
import CVHeader from './CVHeader';
import CVContents from './CVContents';
class CV extends React.Component {
  render() {
    return (
      <div className="CV">
        <CVHeader
          firstName={this.props.personalInfo.firstName}
          lastName={this.props.personalInfo.lastName}
          title={this.props.personalInfo.title}
        />
        <CVContents
          personalInfo={this.props.personalInfo}
          experiences={this.props.experiences}
          education={this.props.education}
        />
      </div>
    );
  }
}

export default CV;
