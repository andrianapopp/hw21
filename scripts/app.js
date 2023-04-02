const a = prompt(`Your number`)
let result = true

for (let i = 2 ; i < a; i++){
    if (a % i === 0){
        result = false
    }
}

alert(result)