import React from 'react';
import '../styles/InputForm.css';
import InputFormSection from './InputFormSection';
class InputForm extends React.Component {
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
        {this.props.education.map((ed) => {
          return (
            <InputFormSection
              section={'education'}
              education={ed}
              key={ed.id}
              id={ed.id}
              onChange={this.props.onChange.education}
              deleteEducation={this.props.deleteEducation}
            />
          );
        })}
        <button className="add" onClick={this.props.addEducation}>
          Add Education
        </button>
        <button onClick={this.props.resetForm}>Reset</button>
        <button onClick={this.props.loadExample}>Load Example</button>
      </div>
    );
  }
}

export default InputForm;
