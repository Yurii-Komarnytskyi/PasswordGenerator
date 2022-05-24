const intArr = [0,1,2,3,4,5,6,7,8,9];
const symbArr = ['@','#','$','*','_'];
const smallLetters = Array.from(Array(26)).map((val, ind) => val = String.fromCharCode(ind + 97));
const bigLetters = smallLetters.map(val => val.toUpperCase());
const genPass = (length, capLetters, integers, symb) => {

}
export {genPass};