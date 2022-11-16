class Api {

  static addres = 'https://jsonplaceholder.typicode.com/todos/1';

  static requestToJSONPlaceholder = async () => {
    fetch(this.addres)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            alert(`Пришел ответ с сервера`);
        })
  }
}

export default Api;



// export const requestToJSONPlaceholder = async () => {
//   fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => {
//           console.log(json);
//           alert(`Пришел ответ с сервера`);
//       })
// }
