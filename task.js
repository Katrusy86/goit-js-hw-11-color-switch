const colors = [
    '#1b191f',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
  }
  refs.startBtn.addEventListener('click', setBg)

  let idInterval = null;
  function setBg() {
    idInterval = setInterval(() => {
    const randomIntegerFromInterval= (min,max) => Math.floor(Math.random()*(max - min + 1) + min);
    document.body.style.backgroundColor= colors[randomIntegerFromInterval(0,colors.length-1)];
  },500)
}
  refs.stopBtn.addEventListener('click', stopBg)
  
  function stopBg(){
    clearInterval(idInterval);
    }

