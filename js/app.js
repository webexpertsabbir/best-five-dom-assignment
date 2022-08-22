// get input value
function getInputField(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldStiring = inputField.value;
    const carentInputField = parseFloat(inputFieldStiring);
    inputField.value = '';
    return carentInputField;

}

//get Text element function
function getTextElement(elementId){
    const textElement = document.getElementById(elementId);
    const textElementStiring = textElement.innerText;
    const carentTextElement = parseFloat(textElementStiring);
    return carentTextElement;
}

// set element funtion
function setCalculatePrice(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

// calculate palyer price event handelar
document.getElementById('player-total-price').addEventListener('click', function(){
   const perPlayerPrice = getInputField('per-player-price');
   if(isNaN(perPlayerPrice) == true){
    alert('Pleace Input a Number');
    return;
   } 
   const playerNumber = document.querySelectorAll('#name-list');
   const playerLanght = playerNumber.length;
   
   const totalPlayerPrice = perPlayerPrice * playerLanght;
   setCalculatePrice('total-player-price', totalPlayerPrice);
})

// calculate total price event
document.getElementById('calculate-total-price').addEventListener('click', function(){
    const totalPlayerPrice = getTextElement('total-player-price');
    const managerPrice = getInputField('manager-price');
    const coachPrice = getInputField('coach-price');
    if(isNaN(totalPlayerPrice) == true || isNaN(managerPrice) == true || isNaN(coachPrice) == true ){
        alert('Pleace Input a Number');
        return;
       } 
    const totalCalculatePrice = coachPrice + managerPrice + totalPlayerPrice;
    setCalculatePrice('total-price', totalCalculatePrice);
})