var QuestionCard = React.createClass({
  render: function() {
    return (
      <div className="col-xs-12 col-sm-6">
        <div className="card">
          <div className="card-buttons">
            <h3>TODO: Edit and delete buttons</h3>
          </div>

          <h3>{this.props.question.content}</h3>
          <ShowAnswer question={this.props.question} key={this.props.question.id}/>
        </div>
      </div>
    );
  }
});
