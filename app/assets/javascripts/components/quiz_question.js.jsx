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
  correct: function() {
    alert('correct!');
  },
  validateAnswer: function(answer) {
    var correctAnswer  = this.props.question.answer;
    var userAnswer = this.state.userAnswer;
    if (userAnswer == correctAnswer) {
      correct
    }
    else if (userAnswer.toLowerCase() == correctAnswer.toLowerCase()) {
      correct
      // Empty card html
      // Add tick animation to card
    }
    else if (wordConvert(userAnswer.toLowerCase()) == correctAnswer) {
      correct
      // int.toWord == correctAnswer.toLowerCase
    }
    else if (numConvert(userAnswer) == correctAnswer.toLowerCase()) {
      correct
      // word.toNum == correctAnswer
    }
    else {
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


// Word to Number Conversion Code

var Small = {
  'zero': 0,
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
  'ten': 10,
  'eleven': 11,
  'twelve': 12,
  'thirteen': 13,
  'fourteen': 14,
  'fifteen': 15,
  'sixteen': 16,
  'seventeen': 17,
  'eighteen': 18,
  'nineteen': 19,
  'twenty': 20,
  'thirty': 30,
  'forty': 40,
  'fifty': 50,
  'sixty': 60,
  'seventy': 70,
  'eighty': 80,
  'ninety': 90
};

var Magnitude = {
  'thousand':     1000,
  'million':      1000000,
  'billion':      1000000000,
  'trillion':     1000000000000,
  'quadrillion':  1000000000000000,
  'quintillion':  1000000000000000000,
  'sextillion':   1000000000000000000000,
  'septillion':   1000000000000000000000000,
  'octillion':    1000000000000000000000000000,
  'nonillion':    1000000000000000000000000000000,
  'decillion':    1000000000000000000000000000000000,
};

var a, n, g;

function wordConvert(s) {
  a = s.toString().split(/[\s-]+/);
  n = 0;
  g = 0;
  a.forEach(feach);
  return n + g;
}

function feach(w) {
  var x = Small[w];
  if (x != null) {
    g = g + x;
  }
  else if (w == "hundred") {
    g = g * 100;
  }
  else {
    x = Magnitude[w];
    if (x != null) {
      n = n + g * x
      g = 0;
    }
    else {
      alert("Unknown number: "+w);
    }
  }
}


// Number conversion code

var ones=['','one','two','three','four','five','six','seven','eight','nine'];
var tens=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
var teens=['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];


function convert_millions(num) {
  if (num>=1000000) {
    return convert_millions(Math.floor(num/1000000)) + " million " + convert_thousands(num%1000000);
  }
  else {
    return convert_thousands(num);
  }
};

function convert_thousands(num) {
  if (num>=1000) {
    return convert_hundreds(Math.floor(num/1000)) + " thousand " + convert_hundreds(num%1000);
  }
  else {
    return convert_hundreds(num);
  }
};

function convert_hundreds(num) {
  if (num>99) {
    return ones[Math.floor(num/100)] + " hundred " + convert_tens(num%100);
  }
  else {
    return convert_tens(num);
  }
};

function convert_tens(num) {
  if (num<10) {
    return ones[num];
  }
  else if (num>=10 && num<20) {
    return teens[num-10];
  }
  else {
    return tens[Math.floor(num/10)] + " " + ones[num%10];
  }
};

function numConvert(num) {
  if (num==0) return "zero";
  else return convert_millions(num);
};

