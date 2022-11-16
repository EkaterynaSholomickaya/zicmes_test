import './index.scss';

class Form {
  static createForm() {
    const form = document.createElement('form');
    form.innerHTML = `    
      <form class="form" action="#" >
        <label class="form__label">
          <input type="text" class="form__input" placeholder="Ваш номер">
        </label>
        <button class="form__button" type="submit"> 
          <span>Заказать</span>
          <i class="fa-sharp fa-solid fa-phone"></i>
        </button>      
      </form>
      `;
    form.classList.add('form');
    form.autofocus = true;
    return form;
  }
}

export default Form;
