
const display = document.querySelector('#calc__display');
const btns = document.querySelector('.calc__btns');
const numbers = ['0','1','2','3','4','5','6','7','8','9','0','.'];
const action = ['+','-','*','/'];
const del = document.querySelector('.del');
let x = '';
let y = '';
let sign = '';
let finish = false;
const clear = document.querySelector('.reset');

clear.addEventListener('click', () => {
  display.innerHTML = '0';
  x = '';
  y = '';
  sign = '';
  finish = '';
})


btns.addEventListener('click', (event) => {
  if (!event.target.classList.contains('btn')) return;
  if (event.target.classList.contains('reset')) return;

  let key = event.target.textContent;

  if (numbers.includes(key)) {
    if (checkDot(display.textContent) && event.target.classList.contains('dot')) {
      x += '';
    } else if (y === '' && sign === '') {
      x += key;
      display.textContent = x;
    } else if (x !== '' && y !== '' && finish) {
      y = key;
      finish = false;
      display.textContent = y;
    } else {
      y += key;
      display.textContent = y;
    }
    
    return
  }
  if (action.includes(key)) {
    sign = key;
    display.textContent = sign;
    return
  }
  if (key === '>') {
    
    if (display.textContent.length == 0) {
      return display.textContent = '0';
    }
    if (x !== '' && y === '') {
      x = clearOne(x);
      display.textContent = x;
      
      return;
    } else if (x !== '' && sign !== '' && y === '') {
      sign = clearOne(sign);
      display.textContent = sign;
      return 
    } else {
      y = clearOne(y);
      display.textContent = y;
      return
    }
  }
  if (key === '=') {
    if (y === '') y = x;
    switch (sign) {
      case '+':
        x = cutZero((+x + +y).toFixed(6));
        break;
      case '-':
        x = cutZero((x - y).toFixed(6));
        break;
      case '*':
        x = cutZero((y * x).toFixed(6));
        break;
      case '/':
        if (y === '0') {
          display.textContent = '0';
          x = '';
          y = '';
          sign = '';
          return;
        }
        x = cutZero((x / y).toFixed(6));
        break;            
    }
    finish = true;
    display.textContent = +x;
  }

})

function clearOne(num) {
  return num.slice(0, -1);
}
function checkDot(str) {
  return str.includes('.');
}
function cutZero(num) {
  let a = String(num);

  if (a.includes('.')) {

    for (let i=a.length; i>=0; i--) {
      if (a[i] === '0') {
        a = a.slice(0, -1);
        return +a
      }
    }
  }
  return +a
}





