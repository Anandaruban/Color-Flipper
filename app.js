const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const color_btn = document.querySelector('.click');
const color = document.querySelector('.hex-font');
const reset = document.querySelector('.reset')
const title = document.querySelector('.title');

color_btn.addEventListener('click', () => {
  let hex_color = "#";  
  for (let i = 0; i < 6; i++) {
    hex_color += hex[Math.floor(Math.random() * hex.length)];
  }

  color.textContent = hex_color;
  color.style.color = hex_color; // color style change
  // color.style.backgroundColor = hex_color; // backgroundColor style change
  document.body.style.backgroundColor = hex_color;

  title.style.color = "#FFFFFF";
})

reset.addEventListener('click', () => {
  color.textContent = "#FFFFFF";
  color.style.color = "#FFFFFF"
  document.body.style.backgroundColor = "#FFFFFF"
  title.style.color = "#000"  
})
