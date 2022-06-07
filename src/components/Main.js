import React from 'react';
import '../styles/Main.css';
import CV from './CV';
import InputForm from './InputForm';
import Experience from './experience';
import Education from './education';
import uniqid from 'uniqid';

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
      experiences: [new Experience(uniqid()), new Experience(uniqid())],
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
          personalInfo.phoneNumber = number;
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
    experience: {
      handleCompanyChange: (company, id) => {
        this.setState((prevState) => {
          for (let i = 0; i < prevState.experiences.length; i++) {
            if (prevState.experiences[i].id === id) {
              let newExp = Object.assign({}, prevState.experiences[i]);
              newExp.company = company;
              prevState.experiences[i] = newExp;
              return prevState;
            }
          }
        });
        console.log(this.state);
      },
      handlePositionChange: (position, id) => {
        this.setState((prevState) => {
          for (let i = 0; i < prevState.experiences.length; i++) {
            if (prevState.experiences[i].id === id) {
              let newExp = Object.assign({}, prevState.experiences[i]);
              newExp.position = position;
              prevState.experiences[i] = newExp;
              return prevState;
            }
          }
        });
        console.log(this.state);
      },
      handleCityChange: (city, id) => {
        this.setState((prevState) => {
          for (let i = 0; i < prevState.experiences.length; i++) {
            if (prevState.experiences[i].id === id) {
              let newExp = Object.assign({}, prevState.experiences[i]);
              newExp.city = city;
              prevState.experiences[i] = newExp;
              return prevState;
            }
          }
        });
        console.log(this.state);
      },
      handleCountryChange: (country, id) => {
        this.setState((prevState) => {
          for (let i = 0; i < prevState.experiences.length; i++) {
            if (prevState.experiences[i].id === id) {
              let newExp = Object.assign({}, prevState.experiences[i]);
              newExp.country = country;
              prevState.experiences[i] = newExp;
              return prevState;
            }
          }
        });
        console.log(this.state);
      },
      handleFromChange: (from, id) => {
        this.setState((prevState) => {
          for (let i = 0; i < prevState.experiences.length; i++) {
            if (prevState.experiences[i].id === id) {
              let newExp = Object.assign({}, prevState.experiences[i]);
              newExp.from = from;
              prevState.experiences[i] = newExp;
              return prevState;
            }
          }
        });
        console.log(this.state);
      },
      handleToChange: (to, id) => {
        this.setState((prevState) => {
          for (let i = 0; i < prevState.experiences.length; i++) {
            if (prevState.experiences[i].id === id) {
              let newExp = Object.assign({}, prevState.experiences[i]);
              newExp.to = to;
              prevState.experiences[i] = newExp;
              return prevState;
            }
          }
        });
        console.log(this.state);
      },
      handleDescriptionChange: (description, id) => {
        this.setState((prevState) => {
          for (let i = 0; i < prevState.experiences.length; i++) {
            if (prevState.experiences[i].id === id) {
              let newExp = Object.assign({}, prevState.experiences[i]);
              newExp.description = description;
              prevState.experiences[i] = newExp;
              return prevState;
            }
          }
        });
        console.log(this.state);
      },
    },
  };

  render() {
    return (
      <div className="main">
        <CV />
        <InputForm
          onChange={this.handlers}
          experiences={this.state.experiences}
        />
      </div>
    );
  }
}

export default Main;
