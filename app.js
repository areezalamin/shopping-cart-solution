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

    }
    else if (calculation == false) {
        const subTotalCostValueChange = parseInt(subTotalCostValue)
        const subTotalCostValueFinal = subTotalCostValueChange + price;
        subTotalCost.innerText = subTotalCostValueFinal;

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

    forPercentage(false, 1219)
    forTax()
    forTotalAmount()

})

document.getElementById('for-case-nagative').addEventListener('click', function() {
    updateShoppingCart(true, 'for-case-number', 'case-total-cost', 59)

    forPercentage(true, 59)
    forTax()
    forTotalAmount()
})


document.getElementById('for-case-positive').addEventListener('click', function() {
    updateShoppingCart(false, 'for-case-number', 'case-total-cost', 59)

    forPercentage(false, 59)
    forTax()
    forTotalAmount()
})

