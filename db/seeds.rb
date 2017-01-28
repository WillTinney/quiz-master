User.create!(
  email: "test@gmail.com",
  password: "password"
  )
Question.create!(
  content: "What number is the Roman Numeral, 'V'?",
  answer: "Five",
  user_id: "1"
  )
Question.create!(
  content: "How many eggs in a dozen",
  answer: "12",
  user_id: "1"
  )
Question.create!(
  content: "What is the capital of England?",
  answer: "London",
  user_id: "1"
  )
Question.create!(
  content: "What colour is a red fire-engine?",
  answer: "Red",
  user_id: "1"
  )
