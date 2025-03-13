const resetButton = document.getElementById('botones__reset') as HTMLButtonElement;
const backButton = document.getElementById('botones__anterior') as HTMLButtonElement;
const nextButton = document.getElementById('botones__siguiente') as HTMLButtonElement;
const textInput = document.getElementById('form__input') as HTMLInputElement;
const submitButton = document.getElementById('form__button') as HTMLButtonElement;
const boardNumber = document.getElementById('numero-turno') as any;




function boardNumberHandler(){
    let orderNumber: number = 0;

    const impressHandler = (newOrder: number) =>{
        const orderString: string = newOrder.toString();
         boardNumber.innerHTML = `${orderString}`;
    }   
    
    nextButton.addEventListener('click', () =>{
        orderNumber++;
        impressHandler(orderNumber);
    })

    backButton.addEventListener('click', () =>{
        orderNumber--;
        impressHandler(orderNumber);
    })

    backButton.addEventListener('click', () =>{
        orderNumber--;
        impressHandler(orderNumber);
    })



}

boardNumberHandler();





