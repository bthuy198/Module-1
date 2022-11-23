let str = '  Rotor';
let str2 = 'abcba';
let str3 = 'hello';
let str4 = 'redder';
// cat khaong trong dau va cuoi chuoi, doi chuoi thanh chu thuong
function changeLowercase(str) {
    return str.toLowerCase().trim();
}

// reverse chuoi da cho
function reverseString(str) {
    return str.split('').reverse().join('');
}

// so sanh chuoi da cho voi chuoi reverse
function isPalindrome(str) {
    str = changeLowercase(str);
    if (str === reverseString(str)) {
        return true;
    } else return false;
}

console.log(isPalindrome(str));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
console.log(isPalindrome(str4));