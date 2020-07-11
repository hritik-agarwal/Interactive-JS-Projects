let spacing = document.querySelector('#spacing'); spacing.addEventListener('input',changeSpacing);
let blur = document.querySelector('#blur'); blur.addEventListener('input',changeBlur);
let baseColor = document.querySelector('#baseColor'); baseColor.addEventListener('input',changeColor);

function changeSpacing(){document.querySelector('#img').style.borderWidth =  `${spacing.value}px`;}
function changeBlur(){document.querySelector('#img').style.filter = `blur(${blur.value}px)`;  }
function changeColor(){document.querySelector('#img').style.borderColor =  `${baseColor.value}`;}