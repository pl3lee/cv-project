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
          onChange={this.props.onChange.personalInfo}
        />
        {this.props.experiences.map((exp) => {
          return <InputFormSection section={'experience'} experience={exp} />;
        })}
        <InputFormSection section={'education'} />
        <button>Reset</button>
      </div>
    );
  }
}

export default InputForm;
