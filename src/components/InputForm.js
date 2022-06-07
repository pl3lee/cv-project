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
          personalInfo={this.props.personalInfo}
        />
        {this.props.experiences.map((exp) => {
          return (
            <InputFormSection
              section={'experience'}
              experience={exp}
              key={exp.id}
              id={exp.id}
              onChange={this.props.onChange.experience}
              deleteExperience={this.props.deleteExperience}
            />
          );
        })}
        <button className="add" onClick={this.props.addExperience}>
          Add Experience
        </button>
        <InputFormSection section={'education'} />
        <button onClick={this.props.resetForm}>Reset</button>
      </div>
    );
  }
}

export default InputForm;
