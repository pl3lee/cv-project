import React from 'react';
import '../styles/main.css';

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
    return <div></div>;
  }
}

export default Main;
