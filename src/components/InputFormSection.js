import React from 'react';
import '../styles/InputFormSection.css';

class InputFormSection extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.onChange.handleFirstNameChange(e.target.value);
  }
  render() {
    if (this.props.section === 'personalInfo') {
      return (
        <div className="personal-info">
          Personal Information
          <input
            placeholder="First name"
            type="text"
            onChange={this.handleChange}
          ></input>
          <input placeholder="Last name" type="text"></input>
          <input placeholder="Title" type="text"></input>
          <input type="file"></input>
          <input placeholder="Address" type="text"></input>
          <input placeholder="Phone number" type="text"></input>
          <input placeholder="Email" type="text"></input>
          <textarea placeholder="Description"></textarea>
        </div>
      );
    }
  }
}

export default InputFormSection;
