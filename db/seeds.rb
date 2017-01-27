User.create!(
  email: "test@gmail.com",
  password: "password"
  )
Question.create!(
  content: "What number is the Roman Numeral, 'V'?",
  answer: "five",
  user_id: "1"
  )
Question.create!(
  content: "How many eggs in a dozen",
  answer: "twelve",
  user_id: "1"
  )
Question.create!(
  content: "What is the capital of England?",
  answer: "London",
  user_id: "1"
  )
