import React from 'react';
import '../styles/CVEntry.css';

class CVEducationItem extends React.Component {
  render() {
    return (
      <div className="CV-entry">
        <div className="CV-entry-date">
          {this.props.education.from} - {this.props.education.to}
        </div>
        <div className="CV-entry-details">
          <div className="CV-entry-header">
            {this.props.education.name}
            {this.props.education.city === ''
              ? ''
              : ', ' + this.props.education.city}
            {this.props.education.country === ''
              ? ''
              : ', ' + this.props.education.country}
          </div>
          <div className="CV-entry-subheader">
            {this.props.education.degree === ''
              ? ''
              : 'Degree: ' + this.props.education.degree}
          </div>
          <div className="CV-entry-subheader">
            {this.props.education.major === ''
              ? ''
              : 'Major: ' + this.props.education.major}
          </div>
          <div className="CV-entry-subheader">
            {this.props.education.minor === ''
              ? ''
              : 'Minor: ' + this.props.education.minor}
          </div>
        </div>
      </div>
    );
  }
}

export default CVEducationItem;
