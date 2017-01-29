var QuizQuestion = React.createClass({
  getInitialState: function() {
    return {
      userAnswer: ""
    }
  },
  setAnswer: function(e) {
    this.setState({
      userAnswer: e.target.value
    });
  },
  validateAnswer: function(answer) {
    var correctAnswer  = this.props.question.answer;
    var userAnswer = this.state.userAnswer;
    if (userAnswer.toLowerCase(); == correctAnswer.toLowerCase()) {
      alert('correct!');
      // Empty card html
      // Add tick animation to card
    } else {
      alert('nope')
    }
  },
  render: function() {
    return (
      <div className="col-xs-12 col-sm-6">
        <div className="card">
          <div className="card-content" id={"card-" + this.props.question.id}>
            <h3>{this.props.question.content}</h3>
            <form action="" onSubmit={this.validateAnswer} id={"answer-" + this.props.question.id}>
              <input type="text" placeholder="Enter your answer!" className="answer-input" value={this.state.userAnswer} onChange={this.setAnswer}></input>
              <br />
              <button type="submit" className="btn btn-info check-answer">
                Check answer
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
});


// Number conversion code

var ones=['','one','two','three','four','five','six','seven','eight','nine'];
var tens=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
var teens=['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];


function convert_millions(num){
    if (num>=1000000){
        return convert_millions(Math.floor(num/1000000))+" million "+convert_thousands(num%1000000);
    }
    else {
        return convert_thousands(num);
    }
}

function convert_thousands(num){
    if (num>=1000){
        return convert_hundreds(Math.floor(num/1000))+" thousand "+convert_hundreds(num%1000);
    }
    else{
        return convert_hundreds(num);
    }
}

function convert_hundreds(num){
    if (num>99){
        return ones[Math.floor(num/100)]+" hundred "+convert_tens(num%100);
    }
    else{
        return convert_tens(num);
    }
}

function convert_tens(num){
    if (num<10) return ones[num];
    else if (num>=10 && num<20) return teens[num-10];
    else{
        return tens[Math.floor(num/10)]+" "+ones[num%10];
    }
}

function convert(num){
    if (num==0) return "zero";
    else return convert_millions(num);
}
