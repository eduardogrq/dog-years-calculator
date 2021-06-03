

let calculateDogYears = (age, name) => {
    let myAge = age
    // First 2 years of a dog represents 10.5 human years
    let earlyYears = 2
    earlyYears *= 10.5
    // Represents later years
    let laterYears = myAge -2
    laterYears *= 4
    // We add warlyYears and laterYears to calculate our age in dog years
    let myAgeInDogYears = earlyYears + laterYears

    let myName = name.toLowerCase()

    console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
}

calculateDogYears(27, "Eduardo")