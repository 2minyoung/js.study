const startGameBtn = document.getElementById('start-game-btn');

// 저렇게 함수 표현식에 function 만 있는게 익명함수
const start = function () {
  console.log('Game is starting...')
};


// 객체에 함수를 저장하는것 요놈이 메서드다 !
// const person = {
//   name: 'Max',
//   greet: function greet() {
//     console.log('Hello there!');
//   }
// };

// person.greet();

// 함수는 객체다 ! 알아두기
// console.dir(startGame); 

startGameBtn.addEventListener('click', start)