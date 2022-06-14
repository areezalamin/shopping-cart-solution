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
            console.log(totalCostValueFinal)
            totalCost.innerText = totalCostValueFinal;
        }
        else if (calculation == false) {
            const totalCostValueChange = parseInt(totalCostValue)
            const totalCostValueFinal = totalCostValueChange + price;
            totalCost.innerText = totalCostValueFinal;
        }

    }
    
}


document.getElementById('for-nagative').addEventListener('click', function(){

    updateShoppingCart(true, 'for-number', 'total-cost', 1219)


    const subTotalCost = document.getElementById('sub-total')
    const subTotalCostValue = subTotalCost.innerText
    const subTotalCostValueChange = parseInt(subTotalCostValue)
    const subTotalCostValueFinal = subTotalCostValueChange - 1219;
    subTotalCost.innerText = subTotalCostValueFinal;


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


    const subTotalCost = document.getElementById('sub-total')
    const subTotalCostValue = subTotalCost.innerText
    const subTotalCostValueChange = parseInt(subTotalCostValue)
    const subTotalCostValueFinal = subTotalCostValueChange + 1219;
    subTotalCost.innerText = subTotalCostValueFinal;

})

document.getElementById('for-case-nagative').addEventListener('click', function() {
    updateShoppingCart(true, 'for-case-number', 'case-total-cost', 59)


    const subTotalCost = document.getElementById('sub-total')
    const subTotalCostValue = subTotalCost.innerText
    const subTotalCostValueChange = parseInt(subTotalCostValue)
    const subTotalCostValueFinal = subTotalCostValueChange - 59;
    subTotalCost.innerText = subTotalCostValueFinal;
})


document.getElementById('for-case-positive').addEventListener('click', function() {
    updateShoppingCart(false, 'for-case-number', 'case-total-cost', 59)


    const subTotalCost = document.getElementById('sub-total')
    const subTotalCostValue = subTotalCost.innerText
    const subTotalCostValueChange = parseInt(subTotalCostValue)
    const subTotalCostValueFinal = subTotalCostValueChange + 59;
    subTotalCost.innerText = subTotalCostValueFinal;
})
