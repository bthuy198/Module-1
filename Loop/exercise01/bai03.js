// hiển thị 20 số fiboacci đầu tiên 
let i1 = 0, i2 = 1, iN = 0;
for(let n = 1; n <= 20; n++){
    console.log(i1); 
    iN = i1 + i2;    
    i1 = i2;         
    i2 = iN;          
}

