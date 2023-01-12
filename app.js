const input = document.querySelector("#salary") 
const submit = document.querySelector("#submit")
const netSalaryOutput = document.querySelector("#netSalaryValue")
const taxOutput = document.querySelector("#taxValue")

submit.addEventListener("click", function (event){
    let salary = input.value
        tax = calculateTax(salary)
        netSalary = salary - tax

    event.preventDefault()
    netSalaryOutput.innerHTML = " ₪" + netSalary
    taxOutput.innerHTML = " ₪" + tax
})


function calculateTax(salary){
    
    if (salary <= 6450)
    tax = salary * 0.1

    else if (salary > 6450 && salary <= 9240)
    tax = ((6450 * 0.1)+((salary - 6450) * 0.14))

    else if (salary > 9240 && salary <= 14840)
    tax = ((6450 * 0.1) + ((9240 - 6450) * 0.14) + ((salary - 9240) * 0.2))

    else if (salary > 14840 && salary <= 20620)
    tax = ((6450 * 0.1) + ((9240 - 6450) * 0.14) + ((14840 - 9240) * 0.2) + ((salary - 14840) * 0.31))

    else if (salary > 20620 && salary <= 42910)
    tax = ((6450 * 0.1) + ((9240 - 6450) * 0.14) + ((14840 - 9240) * 0.2) + ((20620 - 14840) * 0.31) + ((salary - 20620) * 0.35))

    else if (salary > 42910 && salary <= 55270)
    tax = ((6450 * 0.1) + ((9240 - 6450) * 0.14) + ((14840 - 9240) * 0.2) + ((20620 - 14840) * 0.31) + ((42910 - 20620) * 0.35) +((salary - 42910) * 0.47))

    else if (salary > 55270)
    tax = ((6450 * 0.1) + ((9240 - 6450) * 0.14) + ((14840 - 9240) * 0.2) + ((20620 - 14840) * 0.31) + ((42910 - 20620) * 0.35) + ((55270 - 42910) * 0.47) + ((salary - 55270) * 0.5))

    return Math.round(tax)

}





