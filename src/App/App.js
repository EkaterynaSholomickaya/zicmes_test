import Form from "../Form";
import AppEvents from "./AppEvents";

class App {
  draw() {
    const form = Form.createForm();
    document.querySelector('.wrapper').append(form);
  }

  start() {
    document.addEventListener("DOMContentLoaded", this.addEvents );
  }

  addEvents(){
    const button = document.querySelector('.form__button');
    button.addEventListener('click', AppEvents.buttonEvent);

    const input = document.querySelector('.form__input');
    input.addEventListener('input', AppEvents.inputEvent)
}

 
}

export default App;


