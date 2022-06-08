import React from 'react';
import '../styles/CVHeader.css';
class CVHeader extends React.Component {
  render() {
    return (
      <div className="CV-header">
        <div className="CV-name">
          {this.props.firstName} {this.props.lastName}
        </div>
        <div className="CV-title">{this.props.title}</div>
      </div>
    );
  }
}

export default CVHeader;
