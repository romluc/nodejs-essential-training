// console.log(process)
// console.log(process.pid)
// console.log(process.versions)
// console.log(process.argv)

// const [node, file, ...args] = process.argv
// const [, , firstName, lastName] = process.argv
// console.log(`Your name is ${firstName} ${lastName}`)

const grab = (flag) => {
  const indexAfterFlag = process.argv.indexOf(flag) + 1
  return process.argv[indexAfterFlag]
}

const greeting = grab('--greeting')
const name = grab('--name')
const language = grab('--language')

console.log(`${greeting} in ${language}, ${name}!`)
