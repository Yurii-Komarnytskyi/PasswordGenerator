const piecesForPassword = [
    [...Array.from(Array(26)).map((val, ind) => val = String.fromCharCode(ind + 97))],
    [...Array.from(Array(26)).map((val, ind) => val = String.fromCharCode(ind + 65))],
    [0,1,2,3,4,5,6,7,8,9],
    ['@','#','$','*','_'],
]


const randIntRange = (s, e) => Math.floor(s + Math.random() * (e + 1 - s));
const hasPresentChar = (str, kindOfChar) => {

}
function genPass (length = 5, capLetters = false, integers = false, symb = false) {
    let password = '';
        for (let i = 0; i <= length; i++) {
            if(i === 0) {
                password += piecesForPassword[i][randIntRange(0, piecesForPassword[i].length-1)];
                continue;
            }
            if(!arguments[i] && arguments[i] !== undefined) {
                password += piecesForPassword[i][randIntRange(0, piecesForPassword[i].length-1)]
            }
            continue;
        }
        // передати у парольФіллер функцію ті самі аргументи що і в батьківської, слідкувати за довжиною наповнення
    return password;
}
export {
    genPass,
    piecesForPassword,
};


// const intArr = [0,1,2,3,4,5,6,7,8,9];
// const symbArr = ['@','#','$','*','_'];
// const smallLetters = Array.from(Array(26)).map((val, ind) => val = String.fromCharCode(ind + 97));
// const bigLetters = smallLetters.map(val => val.toUpperCase());