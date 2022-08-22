const cart = [];
function displayName(){
    const nameContainer = document.getElementById('add-player');
    nameContainer.textContent = '';
    for(let i = 0; i < cart.length; i++){
        const li = document.createElement('li');
        li.setAttribute('id', 'name-list')
        li.innerHTML = `${cart[i].playerName}`;
        nameContainer.appendChild(li);
    }
}

function addToPlayer(element){
    element.setAttribute('disabled', '');
    const playerName = element.parentNode.children[1].innerText;
    const player = {playerName: playerName};
    cart.push(player);
    if(cart.length > 5){
        alert('besi selcect kora jabe na');
        return
    }
    displayName();
}






