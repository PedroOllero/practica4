const resetButton = document.getElementById('botones__reset') as HTMLButtonElement;
const backButton = document.getElementById('botones__anterior') as HTMLButtonElement;
const nextButton = document.getElementById('botones__siguiente') as HTMLButtonElement;
const textInput = document.getElementById('form__input') as HTMLInputElement;
const submitButton = document.getElementById('form__button') as HTMLButtonElement;
const boardNumber = document.getElementById('numero-turno') as HTMLElement;


const orderNumber: number = 0;

function boardNumberHandler(order: number){
    const orderString: string = order.toString();
    boardNumber.innerHTML = `${orderString}`;
}

function buttonsHandler(){
    
}

boardNumberHandler(orderNumber);
