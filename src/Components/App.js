import React, {Component, Fragment} from 'react';
import {Header, Footer} from './Layouts';
import Exercises from './Exercises';
import {muscles, exercises, injuries} from '../store.js';
import InjuryFooter from './Layouts/InjuryFooter';

export default class extends Component {
  // category is changed via onSelect methods in Footer.js
  state = {exercises, category: 'legs'};

  // Grab exercises based on the muscle group
  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const {muscles} = exercise; // Grab muscles that are worked out from this exercise
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
    this.setState({category});
  };

  /**
   *
   * Set the exercise in App.js state.
   *
   * Gets clicked in left hand column of Exercises/index
   */
  handleExerciseSelected = id => {
    // can also use prevState which is a setState property
    // in order to access the state.. instead, we destructure the exercises
    // array directly from the state, well, because we can.
    // https://reactjs.org/docs/react-component.html
    this.setState(({exercises}) => ({
      // exercises comes from store.js
      // exercise is the value of the first element
      // that satisfies the search condition
      // otherwise, undefined is returned
      exercise: exercises.find(ex => ex.id === id),
    }));
    console.log('Exercise Click Handler: \n');
    console.log(this.state.exercises.find(ex => ex.id === id));
  };

  render() {
    const exercises = this.getExercisesByMuscles(),
      {category, exercise} = this.state;
    // above statement is the same as the below two statements
    // const exercises = this.getExercisesByMuscles();
    // const {category, exercise} = this.state;

    return (
      <Fragment>
        <Header />

        <Exercises
          exercise={exercise}
          category={category}
          exercises={exercises}
          onSelect={this.handleExerciseSelected}
        />

        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelected}
        />
        {/* <InjuryFooter injuries={injuries} /> */}
      </Fragment>
    );
  }
}
