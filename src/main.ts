const resetButton = document.getElementById(
  "botones__reset"
) as HTMLButtonElement;
const backButton = document.getElementById(
  "botones__anterior"
) as HTMLButtonElement;
const nextButton = document.getElementById(
  "botones__siguiente"
) as HTMLButtonElement;
const textInput = document.getElementById("form__input") as HTMLInputElement;
const submitButton = document.getElementById(
  "form__button"
) as HTMLButtonElement;
const boardNumber = document.getElementById("numero-turno") as any;

let orderNumber: number = 0;

function boardNumberHandler() {
  const impressHandler = (newOrder: number) => {
    const orderString: string = newOrder.toString().padStart(2, "0");
    boardNumber.innerHTML = `${orderString}`;
  };

  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    let newOrder: number = parseInt(textInput.value);

    if (newOrder > 0) {
      orderNumber = newOrder;
      impressHandler(orderNumber);
    } else {
      alert("El turno debe ser un numero mayor que 0");
    }
  });

  nextButton.addEventListener("click", () => {
    orderNumber++;
    impressHandler(orderNumber);
  });

  backButton.addEventListener("click", () => {
    if (orderNumber > 0) {
      orderNumber--;
      impressHandler(orderNumber);
    } else {
      alert("No puede haber un turno menor de 0");
    }
  });

  resetButton.addEventListener("click", () => {
    orderNumber = 0;
    impressHandler(orderNumber);
  });
}

boardNumberHandler();
