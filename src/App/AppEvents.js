import Api from "../API";
import { drawCaption } from "../utils/drawCaption";


class AppEvents {
  
  static inputEvent(e){
    const form = document.querySelector('.form');
    form.classList.remove('filed');  
      
    const caption = document.querySelector('.caption');
    if (caption){
      caption.remove();
    }
  }
  
  static buttonEvent(e){

    e.preventDefault();

    const input = document.querySelector('.form__input');

    if(input.value){
        Api.requestToJSONPlaceholder();
    }
    else {
        const caption = document.querySelector('.caption');    
        
        if (!caption){
            drawCaption(`Введите, пожалуйста, телефон!!!`, 'red')
        }

    }  
  }
}

export default AppEvents;