let output = document.getElementById('output');
let buttons = Array.from(document.getElementsByClassName('button'))
buttons.map((button) => {
  button.addEventListener('click', (e) => {
    switch (e.target.innerText) {
      case 'DEL':
        if (e.target.innerHTML) {
          output.innerHTML = output.innerHTML.slice(0, -1);
        }
        break;
      case 'RESET':
        output.innerHTML = '';
        break;
      case '=':
        try {
          output.innerHTML = eval(output.innerHTML);
        } catch (error) {
          output.innerHTML = 'ERROR!!'
        }
        break;
      default: 
        output.innerHTML += e.target.innerHTML;
        break;
    }
    console.log(output.innerText);
  })
})