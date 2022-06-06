import React from 'react';
import '../styles/InputForm.css';
import InputFormSection from './InputFormSection';
class InputForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="input-form">
        <InputFormSection
          section={'personalInfo'}
          onChange={this.props.onChange}
        />
        <InputFormSection section={'experience'} />
        <InputFormSection section={'education'} />
      </div>
    );
  }
}

export default InputForm;
