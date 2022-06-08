import React from 'react';
import '../styles/CVSidebar.css';
import defaultImage from './../default-picture.jpg';
class CVSidebar extends React.Component {
  render() {
    return (
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
    );
  }
}

export default CVSidebar;
