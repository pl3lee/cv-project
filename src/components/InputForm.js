import React from 'react';
import '../styles/InputForm.css';
import InputFormSection from './InputFormSection';
class InputForm extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='input-form'>
        <InputFormSection section={'personalInfo'} />
        <InputFormSection section={'experience'} />
        <InputFormSection section={'education'} />
      </div>
    );
  }
}

export default InputForm;
