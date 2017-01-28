var QuestionCard = React.createClass({
  render: function() {
    return (
      <div className="col-xs-12 col-sm-6">
        <div className="card">
          <div className="card-buttons">
            <h3>TODO: Edit and delete buttons</h3>
          </div>

          <h3>{this.props.question.content}</h3>
          <h4>Show Answer!</h4>
          <h1 className="invisible"><strong>{this.props.question.answer}</strong></h1>
        </div>
      </div>
    );
  }
});
