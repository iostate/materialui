import React, {Component, Fragment} from 'react';
import {Header, Footer} from './Layouts';
import Exercises from './Exercises';
import {muscles, exercises, injuries} from '../store.js';
import InjuryFooter from './Layouts/InjuryFooter';

export default class extends Component {
  state = {
    exercises,
    category: 'legs',
  };

  // Grab exercises based on the muscle group
  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const {muscles} = exercise; // Grab muscle from single exercise object
        // Check if muscle exists for that exercise. If so, return array with
        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
      }, [])
    );
  }

  // Changes the state when a Tab in the Footer is changed.
  handleCategorySelected = category => {
    this.setState({
      category,
    });
  };

  render() {
    const exercises = this.getExercisesByMuscles(),
      {category} = this.state;

    return (
      <Fragment>
        <Header />

        <Exercises exercises={exercises} />

        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelected}
        />
        <InjuryFooter injuries={injuries} />
      </Fragment>
    );
  }
}
