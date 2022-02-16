const board = document.querySelector('#board') // обращаемся к элементу board
const colors = ['#532af7', '#9784e3', '#b42ac9','#d600c1','#3db8ff'] //создаём константу colors значениями которой являются элементы массива
const SQUARES_NUMBER = 600  // задаём максимальное число блоков

for(let i=0; i<SQUARES_NUMBER; i++){
   const square = document.createElement('div') //создаём html элемент через js
   square.classList.add('square')  
   square.addEventListener('mouseover',()=>
      setColor (square))
   square.addEventListener('mouseleave',()=>
      removeColor (square))   
   board.append(square)
}

function setColor(element){
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}` 
}

function removeColor(element){
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor(){
    const index = Math.floor(Math.random()*colors.length)
    return colors[index]
}