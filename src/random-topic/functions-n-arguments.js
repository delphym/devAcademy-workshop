let person = {
  name: 'John Doe',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
  },
  isCool: true,
}

function generatePerson(name, age, isCool) {
  var newPerson = {}

  newPerson.name = name
  newPerson.age = age
  newPerson.isCool = isCool

  return newPerson
}

console.log(person)

function makePersonOlder(inputPersun, amount) {
  inputPersun.age += amount
  return inputPersun
}

var newPersonel = generatePerson('Jo$eph', 25, false)
makePersonOlder(person, 40)
console.log(person)
console.log(newPersonel)
