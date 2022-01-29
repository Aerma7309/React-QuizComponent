import React, { Component } from "react";
import QuizEnd from "./QuizEnd";
import QuizQuestion from "./QuizQuestion";
let quizData = require("./quiz_data.json");

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { quiz_position: 1 };
  }

  handleResetClick() {
    this.state = { quiz_position: 1 };
  }

  showNextQuestion() {
    const quiz_position = this.state.quiz_position + 1;
    this.setState({ quiz_position });
  }

  render() {
    const isQuizEnd =
      this.state.quiz_position - 1 === quizData.quiz_questions.length;

    return (
      <div>
        {isQuizEnd && (
          <QuizEnd resetClickHandler={this.handleResetClick.bind(this)} />
        )}
        {!isQuizEnd && (
          <QuizQuestion
            quiz_question={
              quizData.quiz_questions[this.state.quiz_position - 1]
            }
            class="QuizQuestion"
            showNextQuestionHandler={this.showNextQuestion.bind(this)}
          />
        )}
      </div>
    );
  }
}

export default Quiz;
