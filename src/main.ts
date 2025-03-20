let orderNumber: number = 0;

const submitButtonHandler = () => {
  const submitButton = document.getElementById("form__button");
  const textInput = document.getElementById("form__input");
  if (submitButton instanceof HTMLButtonElement && textInput instanceof HTMLInputElement) {
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
  }
};

const nextButtonHandler = () => {
  const nextButton = document.getElementById("botones__siguiente");
  if (nextButton instanceof HTMLButtonElement) {
    nextButton.addEventListener("click", () => {
      orderNumber++;
      impressHandler(orderNumber);
    });
  }
};

const backButtonHandler = () => {
  const backButton = document.getElementById("botones__anterior");
  if (backButton instanceof HTMLButtonElement) {
    backButton.addEventListener("click", () => {
      if (orderNumber > 0) {
        orderNumber--;
        impressHandler(orderNumber);
      } else {
        alert("No puede haber un turno menor de 0");
      }
    });
  }
};

const resetButtonHandler = () => {
  const resetButton = document.getElementById("botones__reset");
  if (resetButton instanceof HTMLButtonElement) {
    resetButton.addEventListener("click", () => {
      orderNumber = 0;
      impressHandler(orderNumber);
    });
  }
};

const impressHandler = (newOrder: number) => {
  const boardNumber = document.getElementById("numero-turno") as any;
  const orderString: string = newOrder.toString().padStart(2, "0");
  boardNumber.innerHTML = `${orderString}`;
};

document.addEventListener("DOMContentLoaded", () => {
  impressHandler(0);
  submitButtonHandler();
  nextButtonHandler();
  backButtonHandler();
  resetButtonHandler();
});
