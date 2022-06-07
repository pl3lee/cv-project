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
    this.defaultState = {
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
      experiences: [new Experience(uniqid())],
      education: [new Education(uniqid())],
    };
    this.state = this.defaultState;
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
    education: {
      handleNameChange: (name, id) => {
        this.setState((prevState) => {
          for (let i = 0; i < prevState.education.length; i++) {
            if (prevState.education[i].id === id) {
              let newEdu = Object.assign({}, prevState.education[i]);
              newEdu.name = name;
              prevState.education[i] = newEdu;
              return prevState;
            }
          }
        });
        console.log(this.state);
      },
      handleCityChange: (city, id) => {
        this.setState((prevState) => {
          for (let i = 0; i < prevState.education.length; i++) {
            if (prevState.education[i].id === id) {
              let newEdu = Object.assign({}, prevState.education[i]);
              newEdu.city = city;
              prevState.education[i] = newEdu;
              return prevState;
            }
          }
        });
        console.log(this.state);
      },
      handleCountryChange: (country, id) => {
        this.setState((prevState) => {
          for (let i = 0; i < prevState.education.length; i++) {
            if (prevState.education[i].id === id) {
              let newEdu = Object.assign({}, prevState.education[i]);
              newEdu.country = country;
              prevState.education[i] = newEdu;
              return prevState;
            }
          }
        });
        console.log(this.state);
      },
      handleDegreeChange: (degree, id) => {
        this.setState((prevState) => {
          for (let i = 0; i < prevState.education.length; i++) {
            if (prevState.education[i].id === id) {
              let newEdu = Object.assign({}, prevState.education[i]);
              newEdu.degree = degree;
              prevState.education[i] = newEdu;
              return prevState;
            }
          }
        });
        console.log(this.state);
      },
      handleMajorChange: (major, id) => {
        this.setState((prevState) => {
          for (let i = 0; i < prevState.education.length; i++) {
            if (prevState.education[i].id === id) {
              let newEdu = Object.assign({}, prevState.education[i]);
              newEdu.major = major;
              prevState.education[i] = newEdu;
              return prevState;
            }
          }
        });
        console.log(this.state);
      },
      handleMinorChange: (minor, id) => {
        this.setState((prevState) => {
          for (let i = 0; i < prevState.education.length; i++) {
            if (prevState.education[i].id === id) {
              let newEdu = Object.assign({}, prevState.education[i]);
              newEdu.minor = minor;
              prevState.education[i] = newEdu;
              return prevState;
            }
          }
        });
        console.log(this.state);
      },
      handleFromChange: (from, id) => {
        this.setState((prevState) => {
          for (let i = 0; i < prevState.education.length; i++) {
            if (prevState.education[i].id === id) {
              let newEdu = Object.assign({}, prevState.education[i]);
              newEdu.from = from;
              prevState.education[i] = newEdu;
              return prevState;
            }
          }
        });
        console.log(this.state);
      },
      handleToChange: (to, id) => {
        this.setState((prevState) => {
          for (let i = 0; i < prevState.education.length; i++) {
            if (prevState.education[i].id === id) {
              let newEdu = Object.assign({}, prevState.education[i]);
              newEdu.to = to;
              prevState.education[i] = newEdu;
              return prevState;
            }
          }
        });
        console.log(this.state);
      },
    },
  };
  addExperience = () => {
    this.setState((prevState) => {
      return {
        experiences: [...prevState.experiences, new Experience(uniqid())],
      };
    });
  };
  deleteExperience = (id) => {
    this.setState((prevState) => {
      let newExperiences = prevState.experiences.filter((exp) => exp.id !== id);
      return { experiences: newExperiences };
    });
    console.log(this.state);
    console.log(`recevied id ${id}`);
  };
  addEducation = () => {
    this.setState((prevState) => {
      return {
        education: [...prevState.education, new Education(uniqid())],
      };
    });
  };
  deleteEducation = (id) => {
    this.setState((prevState) => {
      let newEducation = prevState.education.filter((ed) => ed.id !== id);
      return { education: newEducation };
    });
    console.log(this.state);
    console.log(`recevied id ${id}`);
  };
  resetForm = () => {
    this.setState(this.defaultState);
    this.setState({
      experiences: [new Experience(uniqid())],
      education: [new Education(uniqid())],
    });
    console.log(this.state);
  };
  render() {
    return (
      <div className="main">
        <CV />
        <InputForm
          onChange={this.handlers}
          personalInfo={this.state.personalInfo}
          experiences={this.state.experiences}
          addExperience={this.addExperience}
          education={this.state.education}
          deleteExperience={this.deleteExperience}
          addEducation={this.addEducation}
          deleteEducation={this.deleteEducation}
          resetForm={this.resetForm}
        />
      </div>
    );
  }
}

export default Main;
