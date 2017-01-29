var Quiz = React.createClass({
  render: function() {
    return <div>
      {this.props.questions.reverse().map(function(question) {
        return <QuizQuestion question={question} key={question.id}/>;
      })}
    </div>;
  }
});
