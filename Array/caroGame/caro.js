const row = 10;
const col = 10;
const player1 = 1;
const player2 = 10;
const x_value = 1;
const o_value = 10;
const caro = new Array(row);
var playing = player1;
//tạo matrix 5x5
for (let i = 0; i < row; i++) {
    let array = new Array(col);
    for (let j = 0; j < array.length; j++) {
        array[j] = 0;
    }
    caro[i] = array;
}
console.log(caro);
//tạo board 
function renderBoard() {
    let tbCaro = "<table><tbody>";
    for (let i = 0; i < row; i++) {
        tbCaro += '<tr>';
        for (let j = 0; j < col; j++) {
            tbCaro += `<td onclick='play(${i},${j})' class='${caro[i][j] == 1 ? 'x_cell' : caro[i][j] == 10 ? 'o_cell' : 'empty_cell'}'>
            ${caro[i][j] == 1 ? 'X ' : caro[i][j] == 10 ? 'O ' : '&nbsp;&nbsp;'}
            </td>`;
        }
    }
    tbCaro += "</tbody></table>";
    document.getElementById('board').innerHTML = tbCaro;
}
//thay đổi giá trị cho từng ô theo lượt chơi => giá trị phần tử trong mảng thay đổi
function play(i, j) {
    if (caro[i][j] != 0) {
        alert('invalid position');
        return;
    }
    if (playing == player1) {
        caro[i][j] = 1;
        playing = player2;
    }
    else if (playing == player2) {
        caro[i][j] = 10;
        playing = player1;
    }
    renderBoard();
}
renderBoard();
// tìm ng thắng cuộc
function checkWin(type){
    let arr = new Array();
    
}