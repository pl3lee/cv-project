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
        {this.props.experiences.length === 0 ? (
          ''
        ) : (
          <CVSection contents={this.props.experiences} type="experiences" />
        )}
        {this.props.education.length === 0 ? (
          ''
        ) : (
          <CVSection contents={this.props.education} type="education" />
        )}
      </div>
    );
  }
}

export default CVMain;
