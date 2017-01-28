var QuestionList = React.createClass({
  render: function() {
    return <div>
      {this.props.questions.map(function(question) {
        return <QuestionCard question={question} key={question.id}/>;
      })}
    </div>;
  }
});
