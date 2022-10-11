var baseNumber = 100

/*for (let i = 0; i < 400; i++) {
    var currentNumber = baseNumber + i
    console.log(`"${currentNumber}": "${currentNumber}px",`)
}*/

for (let i = 0; i < 400; i++) {
    var currentNumber = baseNumber + i
    console.log(`
    case ${currentNumber}:
    setArrowButtonOffset("lg:-right-[${currentNumber}px]")
    break;`)
}