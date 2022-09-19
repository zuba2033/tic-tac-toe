"use strict";



function game() {
    let move = 0;
    const gameField = document.querySelector('.game');
    gameField.addEventListener('click', (event) => { 
        if (event.target.className == 'block' && event.target.innerHTML == "") {
            if (move % 2 == 0) {
                event.target.innerHTML = "x";
            } else {
                event.target.innerHTML = "o";
            }
            move++;
            winDetector();  
            if (move >= 9 && !winDetector() && blocks[i] != "") {
                setTimeout(function() {
                    alert('Ничья!');
                }, 200);   
                setTimeout(function() {
                    location.reload();
                }, 1000);
            }
        }
    });


    const blocks = document.querySelectorAll(".block");
    function winDetector() {
        // крестики
        // горизонтали
            if (
                blocks[0].innerHTML == 'x' &&
                blocks[1].innerHTML == 'x' &&
                blocks[2].innerHTML == 'x'
            ) { 
                setTimeout(function() {
                    alert('Крестики победили!');
                }, 200);   
                setTimeout(function() {
                    location.reload();
                }, 1000);
            } 
            else if (
                blocks[3].innerHTML == 'x' &&
                blocks[4].innerHTML == 'x' &&
                blocks[5].innerHTML == 'x'
            ) {
                setTimeout(function() {
                    alert('Крестики победили!');
                }, 200);   
                setTimeout(function() {
                    location.reload();
                }, 1000);
            }   
            else if (
                blocks[6].innerHTML == 'x' &&
                blocks[7].innerHTML == 'x' &&
                blocks[8].innerHTML == 'x'
            ) {
                setTimeout(function() {
                    alert('Крестики победили!');
                }, 200);   
                setTimeout(function() {
                    location.reload();
                }, 1000);
            } 
            // вертикали
            else if (
                blocks[0].innerHTML == 'x' &&
                blocks[3].innerHTML == 'x' &&
                blocks[6].innerHTML == 'x'
            ) {
                setTimeout(function() {
                    alert('Крестики победили!');
                }, 200);   
                setTimeout(function() {
                    location.reload();
                }, 1000);
            } 
            else if (
                blocks[1].innerHTML == 'x' &&
                blocks[4].innerHTML == 'x' &&
                blocks[7].innerHTML == 'x'
            ) {
                setTimeout(function() {
                    alert('Крестики победили!');
                }, 200);   
                setTimeout(function() {
                    location.reload();
                }, 1000);
            }
            else if (
                blocks[2].innerHTML == 'x' &&
                blocks[5].innerHTML == 'x' &&
                blocks[8].innerHTML == 'x'
            ) {
                setTimeout(function() {
                    alert('Крестики победили!');
                }, 200);   
                setTimeout(function() {
                    location.reload();
                }, 1000);
            }
            // диагонали
            else if (
                blocks[2].innerHTML == 'x' &&
                blocks[4].innerHTML == 'x' &&
                blocks[6].innerHTML == 'x'
            ) {
                setTimeout(function() {
                    alert('Крестики победили!');
                }, 200);   
                setTimeout(function() {
                    location.reload();
                }, 1000);
            } 
            else if (
                blocks[0].innerHTML == 'x' &&
                blocks[4].innerHTML == 'x' &&
                blocks[8].innerHTML == 'x'
            ) {
                setTimeout(function() {
                    alert('Крестики победили!');
                }, 200);   
                setTimeout(function() {
                    location.reload();
                }, 1000);
            }
    
            // нолики
            else if (
                blocks[0].innerHTML == 'o' &&
                blocks[1].innerHTML == 'o' &&
                blocks[2].innerHTML == 'o'
            ) { 
                setTimeout(function() {
                    alert('Победили нолики!');
                }, 200);   
                setTimeout(function() {
                    location.reload();
                }, 1000);
            } 
            else if (
                blocks[3].innerHTML == 'o' &&
                blocks[4].innerHTML == 'o' &&
                blocks[5].innerHTML == 'o'
            ) {
            setTimeout(function() {
                    alert('Победили нолики!');
                }, 200);   
                setTimeout(function() {
                    location.reload();
                }, 1000);
            }   
            else if (
                blocks[6].innerHTML == 'o' &&
                blocks[7].innerHTML == 'o' &&
                blocks[8].innerHTML == 'o'
            ) {
                setTimeout(function() {
                    alert('Победили нолики!');
                }, 200);   
                setTimeout(function() {
                    location.reload();
                }, 1000);
            } 
            else if (
                blocks[0].innerHTML == 'o' &&
                blocks[3].innerHTML == 'o' &&
                blocks[6].innerHTML == 'o'
            ) {
                setTimeout(function() {
                    alert('Победили нолики!');
                }, 200);   
                setTimeout(function() {
                    location.reload();
                }, 1000);
            } 
            else if (
                blocks[1].innerHTML == 'o' &&
                blocks[4].innerHTML == 'o' &&
                blocks[7].innerHTML == 'o'
            ) {
                setTimeout(function() {
                    alert('Победили нолики!');
                }, 200);   
                setTimeout(function() {
                    location.reload();
                }, 1000);
            }
            else if (
                blocks[2].innerHTML == 'o' &&
                blocks[5].innerHTML == 'o' &&
                blocks[8].innerHTML == 'o'
            ) {
                setTimeout(function() {
                    alert('Победили нолики!');
                }, 200);   
                setTimeout(function() {
                    location.reload();
                }, 1000);
            }
            else if (
                blocks[2].innerHTML == 'o' &&
                blocks[4].innerHTML == 'o' &&
                blocks[6].innerHTML == 'o'
            ) {
                setTimeout(function() {
                    alert('Победили нолики!');
                }, 200);   
                setTimeout(function() {
                    location.reload();
                }, 1000);
            } 
            else if (
                blocks[0].innerHTML == 'o' &&
                blocks[4].innerHTML == 'o' &&
                blocks[8].innerHTML == 'o'
            ) {
                setTimeout(function() {
                    alert('Победили нолики!');
                }, 200);   
                setTimeout(function() {
                    location.reload();
                }, 1000);
            } 
    }
}

game();

