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
        photo: null,
        address: '',
        phoneNumber: '',
        email: '',
        description: '',
      },
      experiences: [],
      education: [],
    };
    this.example = {
      personalInfo: {
        firstName: 'John',
        lastName: 'Smith',
        title: 'Software Developer',
        photo: null,
        address: '99 Random Address, Markham, Canada',
        phoneNumber: '+1 (123) 456-7890',
        email: 'example@gmail.com',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
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
      },
      handleLastNameChange: (name) => {
        this.setState((prevState) => {
          let personalInfo = Object.assign({}, prevState.personalInfo);
          personalInfo.lastName = name;
          return { personalInfo };
        });
      },
      handleTitleChange: (newTitle) => {
        this.setState((prevState) => {
          let personalInfo = Object.assign({}, prevState.personalInfo);
          personalInfo.title = newTitle;
          return { personalInfo };
        });
      },
      handlePhotoChange: (newPhoto) => {
        this.setState((prevState) => {
          let personalInfo = Object.assign({}, prevState.personalInfo);
          personalInfo.photo = newPhoto;
          return { personalInfo };
        });
      },
      handleAddressChange: (newAddress) => {
        this.setState((prevState) => {
          let personalInfo = Object.assign({}, prevState.personalInfo);
          personalInfo.address = newAddress;
          return { personalInfo };
        });
      },
      handlePhoneNumberChange: (number) => {
        this.setState((prevState) => {
          let personalInfo = Object.assign({}, prevState.personalInfo);
          personalInfo.phoneNumber = number;
          return { personalInfo };
        });
      },
      handleEmailChange: (newEmail) => {
        this.setState((prevState) => {
          let personalInfo = Object.assign({}, prevState.personalInfo);
          personalInfo.email = newEmail;
          return { personalInfo };
        });
      },
      handleDescriptionChange: (desc) => {
        this.setState((prevState) => {
          let personalInfo = Object.assign({}, prevState.personalInfo);
          personalInfo.description = desc;
          return { personalInfo };
        });
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
  };
  resetForm = () => {
    this.setState(this.defaultState);
    // this.setState({
    //   experiences: [new Experience(uniqid())],
    //   education: [new Education(uniqid())],
    // });
  };
  loadExample = () => {
    this.setState(this.example);
    let exampleExperience1 = new Experience(uniqid());
    exampleExperience1.company = 'Google';
    exampleExperience1.position = 'CEO';
    exampleExperience1.city = 'California';
    exampleExperience1.country = 'United States';
    exampleExperience1.from = '2019';
    exampleExperience1.to = 'Present';
    exampleExperience1.description =
      'Blah blah random description of what I did.';

    let exampleExperience2 = new Experience(uniqid());
    exampleExperience2.company = 'Tesla';
    exampleExperience2.position = 'CEO';
    exampleExperience2.city = 'California';
    exampleExperience2.country = 'United States';
    exampleExperience2.from = '2005';
    exampleExperience2.to = '2018';
    exampleExperience2.description =
      'Blah blah random description of what I did.';
    let exampleEducation1 = new Education(uniqid());
    exampleEducation1.name = 'University of Waterloo';
    exampleEducation1.city = 'Waterloo';
    exampleEducation1.country = 'Canada';
    exampleEducation1.degree = 'Undergraduate';
    exampleEducation1.major = 'Computational Mathematics';
    exampleEducation1.minor = 'Computer Science';
    exampleEducation1.from = '2020';
    exampleEducation1.to = '2025';
    this.setState({
      experiences: [exampleExperience1, exampleExperience2],
      education: [exampleEducation1],
    });
  };
  render() {
    return (
      <div className="main">
        <CV
          personalInfo={this.state.personalInfo}
          experiences={this.state.experiences}
          education={this.state.education}
        />
        <InputForm
          onChange={this.handlers}
          personalInfo={this.state.personalInfo}
          experiences={this.state.experiences}
          education={this.state.education}
          addExperience={this.addExperience}
          deleteExperience={this.deleteExperience}
          addEducation={this.addEducation}
          deleteEducation={this.deleteEducation}
          resetForm={this.resetForm}
          loadExample={this.loadExample}
        />
      </div>
    );
  }
}

export default Main;
