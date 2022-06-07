import React from 'react';
import '../styles/CV.css';
import defaultImage from './../default-picture.jpg';

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
        <div className="CV-contents">
          <div className="CV-main">
            <div className="CV-section">
              <div className="CV-section-name">Description</div>
              <div className="CV-section-content">
                {this.props.personalInfo.description}
              </div>
            </div>
          </div>
          <div className="CV-sidebar">
            <img
              src={
                this.props.personalInfo.photo !== null
                  ? URL.createObjectURL(this.props.personalInfo.photo)
                  : defaultImage
              }
              alt="CV icon"
            ></img>
            <div className="CV-personal-details">
              <div className="detail-item">
                <div className="detail-name">Address</div>
                <div className="detail-content">
                  {this.props.personalInfo.address}
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-name">Phone Number</div>
                <div className="detail-content">
                  {this.props.personalInfo.phoneNumber}
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-name">Email</div>
                <div className="detail-content">
                  {this.props.personalInfo.email}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CV;
