import React, {Component, Fragment} from 'react';
import {Header, Footer} from './Layouts';
import Exercises from './Exercises';
import {muscles, exercises} from '../store.js';

export default class extends Component {
  states = {
    exercises,
  };

  getExercisesByMuscles() {
    return this.states.exercises;
  }

  render() {
    console.log(this.getExercisesByMuscles());
    return (
      <Fragment>
        <Header />

        <Exercises exercises={exercises} />

        <Footer muscles={muscles} />
      </Fragment>
    );
  }
}
