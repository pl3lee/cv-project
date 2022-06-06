import React from 'react';
import '../styles/InputFormSection.css';

class InputFormSection extends React.Component {
  constructor(props) {
    super(props);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handlePhotoChange = this.handlePhotoChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }
  handleFirstNameChange(e) {
    this.props.onChange.handleFirstNameChange(e.target.value);
  }
  handleLastNameChange(e) {
    this.props.onChange.handleLastNameChange(e.target.value);
  }
  handleTitleChange(e) {
    this.props.onChange.handleTitleChange(e.target.value);
  }
  handlePhotoChange(e) {
    this.props.onChange.handlePhotoChange(e.target.value);
  }
  handleAddressChange(e) {
    this.props.onChange.handleAddressChange(e.target.value);
  }
  handlePhoneNumberChange(e) {
    this.props.onChange.handlePhoneNumberChange(e.target.value);
  }
  handleEmailChange(e) {
    this.props.onChange.handleEmailChange(e.target.value);
  }
  handleDescriptionChange(e) {
    this.props.onChange.handleDescriptionChange(e.target.value);
  }
  render() {
    if (this.props.section === 'personalInfo') {
      return (
        <div className="personal-info input-form-section">
          Personal Information
          <input
            placeholder="First name"
            type="text"
            onChange={this.handleFirstNameChange}
          ></input>
          <input
            placeholder="Last name"
            type="text"
            onChange={this.handleLastNameChange}
          ></input>
          <input
            placeholder="Title"
            type="text"
            onChange={this.handleTitleChange}
          ></input>
          <input type="file" onChange={this.handlePhotoChange}></input>
          <input
            placeholder="Address"
            type="text"
            onChange={this.handleAddressChange}
          ></input>
          <input
            placeholder="Phone number"
            type="text"
            onChange={this.handlePhoneNumberChange}
          ></input>
          <input
            placeholder="Email"
            type="text"
            onChange={this.handleEmailChange}
          ></input>
          <textarea
            placeholder="Description"
            onChange={this.handleDescriptionChange}
          ></textarea>
        </div>
      );
    }
  }
}

export default InputFormSection;
