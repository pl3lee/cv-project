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
      experiences: [],
      educations: [],
    };
  }
  render() {
    return (
      <div className='main'>
        <CV />
        <InputForm />
      </div>
    );
  }
}

export default Main;
