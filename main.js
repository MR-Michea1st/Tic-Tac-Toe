
let sqrs = document.getElementsByTagName('td');
let arr = [[1,5,9] , [3,5,7] , [1,2,3] , [4,5,6] , [7,8,9] , [1,4,7] , [2,5,8] , [3,6,9]];

function check() {
    
   let winner = 0;
    for (let i = 0 ; i < arr.length ; i++) {
       
    let win = (sqrs[arr[i][0]-1].textContent === sqrs[arr[i][1]-1].textContent) && (sqrs[arr[i][1]-1].textContent === sqrs[arr[i][2]-1].textContent) && (sqrs[arr[i][0]-1].textContent !== '');

      if (win) {
        if (sqrs[arr[i][0]-1].textContent === 'X') winner = 2;
        else winner = 1;
        
        break;
      }
       
    }

    return winner;
   
}

//console.log(sqrs);
let res = 0 , cnt = 9;
let b = confirm("The player who goes first will take X?");
for(let i = 0 ; i < sqrs.length ; i++) {
  let element = sqrs[i];
  if (cnt === 0) break;
  element.onmouseover = element.style.cursor = 'pointer';
   element.addEventListener('click' , () => {
    
  //   console.log(element.style.cursor);
    if (element.style.cursor === 'pointer') { 
       
      if (b) {
        element.textContent = 'X';
        b = 0; 
      }
    
      else {
        element.textContent = 'O';
        b = 1;
      }

    element.style.fontSize = '1000%';
    element.style.fontFamily = 'Indie Flower';
    element.style.cursor = 'not-allowed';
    cnt--;  
  }
  
   res = check();
   setTimeout(decWinner , 500 , res); 
   if (cnt === 0) {
        setTimeout(decDraw , 500);  
    }
})

}

function decWinner(res) {
 
  if(res > 0) {
    if (res === 1) {
      alert('O is The Winner');
      playAgain();
    }

    else {
      alert("X is The Winner");
      playAgain();        
    }
   }

}


function decDraw() {
  alert('Draw');
  playAgain();
}

function playAgain() {
  if (confirm('Want to play again?')) {
     location.reload();
  }
  
  else window.close();
   
}