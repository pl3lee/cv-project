import React from 'react';
import '../styles/CVEntry.css';

class CVExperienceItem extends React.Component {
  render() {
    return (
      <div className="CV-entry">
        <div className="CV-entry-date">
          {this.props.experience.from} - {this.props.experience.to}
        </div>
        <div className="CV-entry-details">
          <div className="CV-entry-header">
            {this.props.experience.position}
          </div>
          <div className="CV-entry-subheader">
            {this.props.experience.company}
            {this.props.experience.city === ''
              ? ''
              : ', ' + this.props.experience.city}
            {this.props.experience.country === ''
              ? ''
              : ', ' + this.props.experience.country}
          </div>
          <div className="CV-entry-description">
            {this.props.experience.description}
          </div>
        </div>
      </div>
    );
  }
}

export default CVExperienceItem;
