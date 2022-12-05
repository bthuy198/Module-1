let i1 = 0, i2 = 1, iN = 0;
for(let n = 1; n <= 20; n++){
    iN = i1 + i2;    
    i1 = i2;         
    i2 = iN;      
    if (iN % 5 == 0) {
        console.log(iN);
        break;
    }    
}

