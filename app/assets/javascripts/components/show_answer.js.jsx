var ShowAnswer = React.createClass({
  getInitialState: function() {
    return {
      button: '',
      answer: 'invisible'
    }
  },
  handleClick: function() {
    if (this.state.button === ''){
      this.setState({button: 'invisible', answer: ''});
    } else {
      this.setState({button: ''});
    }
  },
  render: function() {
    return (
      <div>
      <div className={"btn btn-info show-button " + this.state.button} onClick={this.handleClick}>
      <h4>Show Answer</h4>
      </div>
      <h1 className={"card-answer " + this.state.answer}><strong>{this.props.question.answer}</strong></h1>
      </div>
  )}
});
