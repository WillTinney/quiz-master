User.create!(
  email: "test@gmail.com",
  password: "password"
  )
Question.create!(
  question: "What number is the Roman Numeral, 'V'?",
  answer: "five",
  user_id: "1"
  )
Question.create!(
  question: "How many eggs in a dozen",
  answer: "twelve",
  user_id: "1"
  )
Question.create!(
  question: "What is the capital of England?",
  answer: "London",
  user_id: "1"
  )
