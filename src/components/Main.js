import React from 'react';
import '../styles/Main.css';
import CV from './CV';
import InputForm from './InputForm';
import Experience from './experience';
import Education from './education';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      personalInfo: {
        firstName: '',
        lastName: '',
        title: '',
        photo: '',
        address: '',
        phoneNumber: '',
        email: '',
        description: '',
      },
      experiences: [new Experience()],
      education: [new Education()],
    };
  }
  handlers = {
    personalInfo: {
      handleFirstNameChange: (name) => {
        this.setState((prevState) => {
          let personalInfo = Object.assign({}, prevState.personalInfo);
          personalInfo.firstName = name;
          return { personalInfo };
        });
        console.log(this.state);
      },
      handleLastNameChange: (name) => {
        this.setState((prevState) => {
          let personalInfo = Object.assign({}, prevState.personalInfo);
          personalInfo.lastName = name;
          return { personalInfo };
        });
        console.log(this.state);
      },
      handleTitleChange: (newTitle) => {
        this.setState((prevState) => {
          let personalInfo = Object.assign({}, prevState.personalInfo);
          personalInfo.title = newTitle;
          return { personalInfo };
        });
        console.log(this.state);
      },
      handlePhotoChange: (newPhoto) => {
        this.setState((prevState) => {
          let personalInfo = Object.assign({}, prevState.personalInfo);
          personalInfo.photo = newPhoto;
          return { personalInfo };
        });
        console.log(this.state);
      },
      handleAddressChange: (newAddress) => {
        this.setState((prevState) => {
          let personalInfo = Object.assign({}, prevState.personalInfo);
          personalInfo.address = newAddress;
          return { personalInfo };
        });
        console.log(this.state);
      },
      handlePhoneNumberChange: (number) => {
        this.setState((prevState) => {
          let personalInfo = Object.assign({}, prevState.personalInfo);
          personalInfo.PhoneNumber = number;
          return { personalInfo };
        });
        console.log(this.state);
      },
      handleEmailChange: (newEmail) => {
        this.setState((prevState) => {
          let personalInfo = Object.assign({}, prevState.personalInfo);
          personalInfo.email = newEmail;
          return { personalInfo };
        });
        console.log(this.state);
      },
      handleDescriptionChange: (desc) => {
        this.setState((prevState) => {
          let personalInfo = Object.assign({}, prevState.personalInfo);
          personalInfo.description = desc;
          return { personalInfo };
        });
        console.log(this.state);
      },
    },
    experience: {},
  };

  render() {
    return (
      <div className="main">
        <CV />
        <InputForm onChange={this.handlers} />
      </div>
    );
  }
}

export default Main;
