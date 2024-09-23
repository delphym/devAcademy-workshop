var osoba = {
  name: 'Josef',
  age: 30,
  isCool: true,
  favFood: 'sandwiches',
  children: ['Addie', 'Dexter'],
}

console.log(osoba.name)
console.log(osoba['name'])
// console.log(osoba[name]) //undefined variable name

key = 'name'
console.log(osoba[key])
console.log(osoba.key) //variable key is undefined

/*
data.container.header.footer....
data["container"]["header"]["footer"]....
*/

function printValueFromObject(object, key) {
  console.log('key is: ' + key)
  console.log(object[key])
}
printValueFromObject(osoba, 'age')
printValueFromObject(osoba, 'children')
