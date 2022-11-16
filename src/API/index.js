import { drawCaption } from "../index";

class Api {

  static addres = 'https://jsonplaceholder.typicode.com/todos/1';

  static requestToJSONPlaceholder = async () => {
    fetch(this.addres)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            drawCaption('Пришел ответ с сервера','blue')
        })
  }
}

export default Api;

