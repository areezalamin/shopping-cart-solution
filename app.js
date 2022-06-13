document.getElementById('for-nagative').addEventListener('click', function(){
    const forNegativeNumber = document.getElementById('for-number')
    const forNegativeNumberValue = forNegativeNumber.value ;
    const forNegativeNumberValueChange = parseInt(forNegativeNumberValue)
    const forDecreaseNegativeNumberValue = forNegativeNumberValueChange - 1
    forNegativeNumber.value = parseInt(forDecreaseNegativeNumberValue);


    const totalCost = document.getElementById('total-cost')
    const totalCostValue = totalCost.innerText
    const totalCostValueChange = parseInt(totalCostValue)
    const totalCostValueFinal = totalCostValueChange - 1219;
    totalCost.innerText = totalCostValueFinal;


    const subTotalCost = document.getElementById('sub-total')
    const subTotalCostValue = subTotalCost.innerText
    const subTotalCostValueChange = parseInt(subTotalCostValue)
    const subTotalCostValueFinal = subTotalCostValueChange - 1219;
    subTotalCost.innerText = subTotalCostValueFinal;
})

document.getElementById('for-positive').addEventListener('click', function(){

    const forPositiveNumber = document.getElementById('for-number')
    const forPositiveNumberValue = forPositiveNumber.value ;
    const forPositiveNumberValueChange = parseInt(forPositiveNumberValue)
    const forIncreasePositiveNumberValue = forPositiveNumberValueChange + 1;
    forPositiveNumber.value = parseInt(forIncreasePositiveNumberValue);


    const totalCost = document.getElementById('total-cost')
    const totalCostValue = totalCost.innerText
    const totalCostValueChange = parseInt(totalCostValue)
    const totalCostValueFinal = totalCostValueChange + 1219;
    totalCost.innerText = totalCostValueFinal;


    const subTotalCost = document.getElementById('sub-total')
    const subTotalCostValue = subTotalCost.innerText
    const subTotalCostValueChange = parseInt(subTotalCostValue)
    const subTotalCostValueFinal = subTotalCostValueChange + 1219;
    subTotalCost.innerText = subTotalCostValueFinal;

})
