function updateShoppingCart(calculation, inputValue, allAmount, price, totalAmount, subTotalCost) {


    const forNegativeNumber = document.getElementById(inputValue)
    const forNegativeNumberValue = forNegativeNumber.value ;
    if (forNegativeNumberValue > 0){
        const forNegativeNumberValueChange = parseInt(forNegativeNumberValue)
        
        if (calculation == true) {
            const forDecreaseNegativeNumberValue = forNegativeNumberValueChange - 1
            forNegativeNumber.value = forDecreaseNegativeNumberValue;
        }
        else if (calculation == false) {
            const forDecreaseNegativeNumberValue = forNegativeNumberValueChange + 1
            forNegativeNumber.value = forDecreaseNegativeNumberValue;

        }

        const totalCost = document.getElementById(allAmount, totalAmount)
        const totalCostValue = totalCost.innerText
        if (calculation == true) {
            const totalCostValueChange = parseInt(totalCostValue)
            const totalCostValueFinal = totalCostValueChange - price;
            totalCost.innerText = totalCostValueFinal;
        }
        else if (calculation == false) {
            const totalCostValueChange = parseInt(totalCostValue)
            const totalCostValueFinal = totalCostValueChange + price;
            totalCost.innerText = totalCostValueFinal;
        }

    }
    
}

function forPercentage(calculation, price) {
    const subTotalCost = document.getElementById('sub-total')
    const subTotalCostValue = subTotalCost.innerText

    if (calculation == true) {
        const subTotalCostValueChange = parseInt(subTotalCostValue)
        const subTotalCostValueFinal = subTotalCostValueChange - price;
        subTotalCost.innerText = subTotalCostValueFinal;
        // const subTotalCostValueFinalForTax = subTotalCostValueFinal / 10
        // subTotalCost.innerText = subTotalCostValueFinalForTax
    }
    else if (calculation == false) {
        const subTotalCostValueChange = parseInt(subTotalCostValue)
        const subTotalCostValueFinal = subTotalCostValueChange + price;
        subTotalCost.innerText = subTotalCostValueFinal;
        // const subTotalCostValueFinalForTax = subTotalCostValueFinal / 10
        // subTotalCost.innerText = subTotalCostValueFinalForTax
    }

}

function forTax() {
    const taxAmount = document.getElementById('for-tax')
    const taxForSubTotalCost = document.getElementById('sub-total')
    const taxForSubTotalCostValue = taxForSubTotalCost.innerText
    const taxForSubTotalCostValueChange = parseInt(taxForSubTotalCostValue)

    const subTotalCostValueFinalForTax = taxForSubTotalCostValueChange / 10
    taxAmount.innerText = subTotalCostValueFinalForTax
    
}


function forTotalAmount(){
    const overallAmount = document.getElementById('for-total')
    const taxAmount = document.getElementById('for-tax')
    const taxAmountValue = taxAmount.innerText
    const taxAmountValueChange = parseInt(taxAmountValue)
    const taxForSubTotalCost = document.getElementById('sub-total')
    const taxForSubTotalCostValue = taxForSubTotalCost.innerText
    const taxForSubTotalCostValueChange = parseInt(taxForSubTotalCostValue)
    overallAmount.innerText = taxAmountValueChange + taxForSubTotalCostValueChange;
    
    
}




document.getElementById('for-nagative').addEventListener('click', function(){

    updateShoppingCart(true, 'for-number', 'total-cost', 1219)


    forPercentage(true, 1219)
    forTax()
    forTotalAmount()


})

document.getElementById('for-positive').addEventListener('click', function(){

    updateShoppingCart(false, 'for-number', 'total-cost', 1219)

    // const forPositiveNumber = document.getElementById('for-number')
    // const forPositiveNumberValue = forPositiveNumber.value ;
    // const forPositiveNumberValueChange = parseInt(forPositiveNumberValue)
    // const forIncreasePositiveNumberValue = forPositiveNumberValueChange + 1;
    // forPositiveNumber.value = parseInt(forIncreasePositiveNumberValue);


    // const totalCost = document.getElementById('total-cost')
    // const totalCostValue = totalCost.innerText
    // const totalCostValueChange = parseInt(totalCostValue)
    // const totalCostValueFinal = totalCostValueChange + 1219;
    // totalCost.innerText = totalCostValueFinal;


    // const subTotalCost = document.getElementById('sub-total')
    // const subTotalCostValue = subTotalCost.innerText
    // console.log(subTotalCostValue)
    // const subTotalCostValueChange = parseInt(subTotalCostValue)
    // const subTotalCostValueFinal = subTotalCostValueChange + 1219;
    // subTotalCost.innerText = subTotalCostValueFinal;

    // console.log(subTotalCostValueFinal)
    forPercentage(false, 1219)
    forTax()
    forTotalAmount()

})

document.getElementById('for-case-nagative').addEventListener('click', function() {
    updateShoppingCart(true, 'for-case-number', 'case-total-cost', 59)


    // const subTotalCost = document.getElementById('sub-total')
    // const subTotalCostValue = subTotalCost.innerText
    // const subTotalCostValueChange = parseInt(subTotalCostValue)
    // const subTotalCostValueFinal = subTotalCostValueChange - 59;
    // subTotalCost.innerText = subTotalCostValueFinal;

    // console.log(subTotalCostValueFinal)
    forPercentage(true, 59)
    forTax()
    forTotalAmount()
})


document.getElementById('for-case-positive').addEventListener('click', function() {
    updateShoppingCart(false, 'for-case-number', 'case-total-cost', 59)


    // const subTotalCost = document.getElementById('sub-total')
    // const subTotalCostValue = subTotalCost.innerText
    // const subTotalCostValueChange = parseInt(subTotalCostValue)
    // const subTotalCostValueFinal = subTotalCostValueChange + 59;
    // subTotalCost.innerText = subTotalCostValueFinal;

    forPercentage(false, 59)
    forTax()
    forTotalAmount()
})

// const forTax = document.getElementById('for-tax')
// const forTaxTotal = 
