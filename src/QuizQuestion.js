import React, { Component } from "react";

class QuizQuestion extends Component {
  render(props) {
    let { instruction_text, answer_options } = this.props.quiz_question;
    return (
      <main>
        <section>
          <p>{instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {answer_options.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
