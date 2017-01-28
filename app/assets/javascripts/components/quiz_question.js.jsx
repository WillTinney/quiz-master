var QuizQuestion = React.createClass({
  getInitialState: function() {
    return {
      answer: "nil"
    }
  },
  validateAnswers: function(e) {
    e.preventDefault();
    var queryString = $('#answer').serialize();
    console.log(queryString);
  },
  render: function() {
    return (
      <div className="col-xs-12 col-sm-6">
        <div className="card">
          <div className="card-content" id={"card-" + this.props.question.id}>
            <h3>{this.props.question.content}</h3>
            <form action="" onSubmit={this.validateAnswers} id={"answer-" + this.props.question.id}>
              <input type="text" placeholder="Answer here" value={this.props.answer}></input>
              <button type="submit">
                Validate answer
              </button>
            </form>
            <ShowAnswer question={this.props.question} key={this.props.question.id}/>
          </div>
        </div>
      </div>
    );
  }
});
