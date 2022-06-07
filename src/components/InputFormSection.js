import React from 'react';
import '../styles/InputFormSection.css';

class InputFormSection extends React.Component {
  constructor(props) {
    super(props);
  }
  handlePersonalInfoChange = (e) => {
    if (e.target.placeholder === 'First name') {
      this.props.onChange.handleFirstNameChange(e.target.value);
    } else if (e.target.placeholder === 'Last name') {
      this.props.onChange.handleLastNameChange(e.target.value);
    } else if (e.target.placeholder === 'Title') {
      this.props.onChange.handleTitleChange(e.target.value);
    } else if (e.target.placeholder === 'Address') {
      this.props.onChange.handleAddressChange(e.target.value);
    } else if (e.target.placeholder === 'Phone number') {
      this.props.onChange.handlePhoneNumberChange(e.target.value);
    } else if (e.target.placeholder === 'Email') {
      this.props.onChange.handleEmailChange(e.target.value);
    } else if (e.target.placeholder === 'Description') {
      this.props.onChange.handleDescriptionChange(e.target.value);
    } else {
      this.props.onChange.handlePhotoChange(e.target.value);
    }
  };

  handleExperienceChange = (e) => {
    if (e.target.placeholder === 'Company Name') {
      this.props.onChange.handleCompanyChange(e.target.value, this.props.id);
    } else if (e.target.placeholder === 'Position') {
      this.props.onChange.handlePositionChange(e.target.value, this.props.id);
    } else if (e.target.placeholder === 'City') {
      this.props.onChange.handleCityChange(e.target.value, this.props.id);
    } else if (e.target.placeholder === 'Country') {
      this.props.onChange.handleCountryChange(e.target.value, this.props.id);
    } else if (e.target.placeholder === 'From') {
      this.props.onChange.handleFromChange(e.target.value, this.props.id);
    } else if (e.target.placeholder === 'To') {
      this.props.onChange.handleToChange(e.target.value, this.props.id);
    } else if (e.target.placeholder === 'Description') {
      this.props.onChange.handleDescriptionChange(
        e.target.value,
        this.props.id
      );
    }
  };

  deleteExperience = () => {
    this.props.deleteExperience(this.props.id);
    console.log(this.props.id);
  };
  render() {
    if (this.props.section === 'personalInfo') {
      return (
        <div className="personal-info input-form-section">
          Personal Information
          <input
            placeholder="First name"
            type="text"
            onChange={this.handlePersonalInfoChange}
            value={this.props.personalInfo.firstName}
          ></input>
          <input
            placeholder="Last name"
            type="text"
            onChange={this.handlePersonalInfoChange}
            value={this.props.personalInfo.lastName}
          ></input>
          <input
            placeholder="Title"
            type="text"
            onChange={this.handlePersonalInfoChange}
            value={this.props.personalInfo.title}
          ></input>
          <input
            type="file"
            onChange={this.handlePersonalInfoChange}
            value={this.props.personalInfo.photo}
          ></input>
          <input
            placeholder="Address"
            type="text"
            onChange={this.handlePersonalInfoChange}
            value={this.props.personalInfo.address}
          ></input>
          <input
            placeholder="Phone number"
            type="text"
            onChange={this.handlePersonalInfoChange}
            value={this.props.personalInfo.phoneNumber}
          ></input>
          <input
            placeholder="Email"
            type="text"
            onChange={this.handlePersonalInfoChange}
            value={this.props.personalInfo.email}
          ></input>
          <textarea
            placeholder="Description"
            onChange={this.handlePersonalInfoChange}
            value={this.props.personalInfo.description}
          ></textarea>
        </div>
      );
    } else if (this.props.section === 'experience') {
      return (
        <div className="experience input-form-section">
          Experience
          <input
            placeholder="Company Name"
            type="text"
            value={this.props.experience.company}
            onChange={this.handleExperienceChange}
          ></input>
          <input
            placeholder="Position"
            type="text"
            value={this.props.experience.position}
            onChange={this.handleExperienceChange}
          ></input>
          <input
            placeholder="City"
            type="text"
            value={this.props.experience.city}
            onChange={this.handleExperienceChange}
          ></input>
          <input
            placeholder="Country"
            type="text"
            value={this.props.experience.country}
            onChange={this.handleExperienceChange}
          ></input>
          <input
            placeholder="From"
            type="text"
            value={this.props.experience.from}
            onChange={this.handleExperienceChange}
          ></input>
          <input
            placeholder="To"
            type="text"
            value={this.props.experience.to}
            onChange={this.handleExperienceChange}
          ></input>
          <textarea
            placeholder="Description"
            value={this.props.experience.description}
            onChange={this.handleExperienceChange}
          ></textarea>
          <button className="delete" onClick={this.deleteExperience}>
            Delete
          </button>
        </div>
      );
    } else if (this.props.section === 'education') {
      return (
        <div className="experience input-form-section">
          Education
          <input placeholder="University Name" type="text"></input>
          <input placeholder="City" type="text"></input>
          <input placeholder="Country" type="text"></input>
          <input placeholder="Degree" type="text"></input>
          <input placeholder="Major" type="text"></input>
          <input placeholder="Minor" type="text"></input>
          <input placeholder="From" type="text"></input>
          <input placeholder="To" type="text"></input>
          <button className="delete">Delete</button>
          <button className="add">Add</button>
        </div>
      );
    }
  }
}

export default InputFormSection;
