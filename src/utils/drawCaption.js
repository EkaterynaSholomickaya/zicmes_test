export function drawCaption(text, color){
  const form = document.querySelector('.form');
  let caption = document.createElement('div');
  caption.classList.add('caption');
  caption.style.color = color; 
  caption.innerText = text;
  form.after(caption);
}
