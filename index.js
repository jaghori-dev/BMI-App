const form = document.querySelector(".form")
const calcButton = document.querySelector(".form__button")
const formResult = document.querySelector(".form__result")


function bmiResult (bmi){
     if (bmi < 18.5){
        return "You are Underweight"
    }
    else if (bmi >= 18.5 && bmi <=24.9){
        return "Your Weight is normal"
    }
    else if (bmi >=25 && bmi <= 29.9){
        return "You are Overweight"
    }
    else {
        return "Obsity you should care!!!"
    }
}
form.addEventListener("submit", (event) => {
    event.preventDefault()
    const weight = event.target.elements.weight.value
    const height = event.target.elements.height.value
    const bmi = weight / (height / 100)**2
    formResult.textContent = bmiResult(bmi)   
})
