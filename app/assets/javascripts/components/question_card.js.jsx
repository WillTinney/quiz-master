var QuestionCard = React.createClass({
  render: function() {
    return (
      <div className="col-xs-12 col-sm-6">
        <div className="card">
          <div id={"edit-" + this.props.question.id}></div>
          <div className="card-content" id={"card-" + this.props.question.id}>
            <div className="card-buttons">
              <a data-remote="true" href={"/users/" + this.props.question.user_id + "/questions/" + this.props.question.id + "/edit"}>
                <i className="fa fa-pencil" aria-hidden="true"> </i>
              </a>
              <a rel="nofollow" data-method="delete" href={"/users/" + this.props.question.user_id + "/questions/" + this.props.question.id}>
                <i className="fa fa-trash" aria-hidden="true"></i>
              </a>
            </div>

            <h3>{this.props.question.content}</h3>
            <ShowAnswer question={this.props.question} key={this.props.question.id}/>
          </div>
        </div>
      </div>
    );
  }
});
