import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = { incorrectAnswer: false };
  }

  handleClick(buttonText) {
    this.setState({
      incorrectAnswer: buttonText !== this.props.quiz_question.answer,
    });
    if (buttonText === this.props.quiz_question.answer)
      this.props.showNextQuestionHandler();
  }

  render(props) {
    return (
      <main>
        {this.state.incorrectAnswer && (
          <p className="error">Sorry, that's not right</p>
        )}
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map((e, i) => (
              <QuizQuestionButton
                button_text={e}
                key={i}
                clickHandler={this.handleClick.bind(this)}
              />
            ))}
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
