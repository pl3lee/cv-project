import React from 'react';
import '../styles/Main.css';
import CV from './CV';
import InputForm from './InputForm';

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
    };
  }
  handlers = {
    handleFirstNameChange: (name) => {
      this.setState({ firstName: name });
      console.log(this.state);
    },
    handleLastNameChange: (name) => {
      this.setState({ lastName: name });
    },
    handleTitleChange: (newTitle) => {
      this.setState({ title: newTitle });
    },
    handlePhotoChange: (newPhoto) => {
      this.setState({ photo: newPhoto });
    },
    handleAddressChange: (newAddress) => {
      this.setState({ address: newAddress });
    },
    handlePhoneNumberChange: (number) => {
      this.setState({ phoneNumber: number });
    },
    handleEmailChange: (newEmail) => {
      this.setState({ email: newEmail });
    },
    handleDescriptionChange: (desc) => {
      this.setState({ description: desc });
    },
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
