document.getElementById('for-nagative').addEventListener('click', function(){
    const forNegativeNumber = document.getElementById('for-number')
    const forNegativeNumberValue = forNegativeNumber.value ;
    const forNegativeNumberValueChange = parseFloat(forNegativeNumberValue)
    const forDecreaseNegativeNumberValue = forNegativeNumberValueChange - 1
    forNegativeNumber.value = parseFloat(forDecreaseNegativeNumberValue)
})

document.getElementById('for-positive').addEventListener('click', function(){

    const forPositiveNumber = document.getElementById('for-number')
    const forPositiveNumberValue = forPositiveNumber.value ;
    const forPositiveNumberValueChange = parseFloat(forPositiveNumberValue)
    const forIncreasePositiveNumberValue = forPositiveNumberValueChange + 1;
    forPositiveNumber.value = parseFloat(forIncreasePositiveNumberValue);

})