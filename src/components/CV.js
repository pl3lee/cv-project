import React from 'react';
import '../styles/CV.css';

class CV extends React.Component {
  render() {
    return (
      <div className="CV">
        <div className="CV-header">
          <div className="CV-name">
            {this.props.personalInfo.firstName}{' '}
            {this.props.personalInfo.lastName}
          </div>
          <div className="CV-title">{this.props.personalInfo.title}</div>
        </div>
        <div className="CV-main">
          <div className="CV-section">
            <div>Description</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CV;
