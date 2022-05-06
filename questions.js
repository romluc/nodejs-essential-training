const questions = [
  'What is your name?',
  'What is your favorite sport?',
  'What is your favorite programming language?',
]

const ask = (i = 0) => {
  process.stdout.write(`\n\n\n${questions[i]}\n`)
  process.stdout.write('> ')
}

ask()

const answers = []
process.stdin.on('data', (data) => {
  const input = data.toString().trim()
  answers.push(input)

  // Only asks while answers are less than questions
  if (answers.length === questions.length) process.exit()

  ask(answers.length)
})

process.on('exit', () => {
  const [name, sport, language] = answers
  console.log(answers)
  process.stdout.write(`
    Hello ${name}!
    Go ahead and play ${sport}!
    You can write ${language} code later! :D
  `)
})
