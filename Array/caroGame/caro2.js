const row = 10;
const col = 10;
const player1 = 1;
const player2 = 10;
const x_value = 1;
const o_value = 10;
let playing = 1;
const caro = new Array(row);
//tạo matrix 10 10 với giá trị 0 
for (let i = 0; i < row; i++) {
     let array = new Array(col);
    for (let j = 0; j < col; j++) {
        array[j] = 0;
    }
    caro[i] = array;
}
console.log(caro);

//tạo board

function renderBoard() {
    let tbCaro = '<table><tbody>'
    for (let i = 0; i < row; i++) {
        tbCaro += '<tr>';
        for (let j = 0; j < col; j++) {
            tbCaro += `<td onclick='play(${i},${j})' class='${caro[i][j] == 1 ? 'x_cell' : caro[i][j] == 10 ? 'o_cell' : 'empty_cell'}'>
            ${caro[i][j] == 1 ? 'X ' : caro[i][j] == 10 ? 'O ' : '&nbsp;&nbsp;'}
            </td>`;
            // tbCaro += `<td onclick = 'play(${i},${j})' class='${caro[i][j] == 1 ? 'x_cell' : caro[i][j] == 10 ? 'o_cell' : ''}'>
            // ${caro[i][j] == 1 ? 'x ' : caro[i][j] == 10 ? 'o ' : '&nbsp;&nbsp;'}
            // </td>`
        }
        // tbCaro += "</tr>"
    }
    tbCaro += '</tbody></table>';
    document.getElementById('board').innerHTML = tbCaro;
}
//player 1 = o, player 2 = x, vị trí đã đánh kh được đánh lại

function play(i, j) {
    if (caro[i][j] != 0) {
        alert('Invalid position')
        return;
    }
    if (playing == player1) {
        caro[i][j] = 1;
        return playing = player2;
    }
    if (playing == player2) {
        caro[i][j] = 10;
        return playing = player1;
    }
    renderBoard();
}
renderBoard();

function checkWin(type){
    
}