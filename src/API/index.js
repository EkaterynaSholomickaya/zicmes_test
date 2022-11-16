import { drawCaption } from "../utils/drawCaption";

class Api {

  static addres = 'https://jsonplaceholder.typicode.com/todos/1';

  static requestToJSONPlaceholder = async () => {
    fetch(this.addres)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            const caption = document.querySelector('.caption');
            if (!caption){
              drawCaption('Пришел ответ с сервера','blue')
            }

        })
  }
}

export default Api;

