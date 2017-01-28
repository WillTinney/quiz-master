var QuestionList = React.createClass({
  render: function() {
    return <div>
      <div className="col-xs-12 col-sm-6 invisible">
        <div className="card" id="new-question"></div>
      </div>
      {this.props.questions.reverse().map(function(question) {
        return <QuestionCard question={question} key={question.id}/>;
      })}
    </div>;
  }
});
