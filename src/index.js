import './styles/main.scss';
import Form from './Form';
import Api from './API';

// ---------------create WRAPPER -------------------------------------

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.append(wrapper);

// --------------create FORM------------------------------------------

const form = Form.createForm();
wrapper.append(form);

// ---------------- EVENTS --------------------------------------------

document.addEventListener("DOMContentLoaded", startWork );

function startWork(){

    const button = document.querySelector('.form__button');
    button.addEventListener('click', buttonEvent);

    const input = document.querySelector('.form__input');
    input.addEventListener('input', ()=>{

    const form = document.querySelector('.form');
    form.classList.remove('filed');  
      
    const caption = document.querySelector('.caption');
    if (caption)
      caption.remove();
    })
    
}


function buttonEvent(e){

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



export function drawCaption(text, color){
    const form = document.querySelector('.form');
    let caption = document.createElement('div');
    caption.classList.add('caption');
    caption.style.color = color; 
    caption.innerText = text;
    form.after(caption);
}