function* generatorFunction() {
    for (let i = 0; 1 < 5; i++) {
      yield i
    }
}

const iter = generatorFunction()

console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
