const piecesForPassword = [
    [...Array.from(Array(26)).map((_, ind) => String.fromCharCode(ind + 97))],
    [...Array.from(Array(26)).map((_, ind) => String.fromCharCode(ind + 65))], // Big ones
    [0,1,2,3,4,5,6,7,8,9],
    ['@','#','$','%','*','_'],
]

const randIntRange = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

const pickRandArr = (arr, uniqueSymb, recipient) => {
    const key = arr[randIntRange(0,3)];
    const val = key[randIntRange(0, key.length-1)];
    if (uniqueSymb && recipient.includes(val)) {
        return pickRandArr(arr, uniqueSymb, recipient)
    } 
    return val;
}

const genPass = ({
    passwdLength = 5,
    capLettIncluded = false, 
    integersIncluded = false, 
    symbolsIncluded = false,
    uniqueSymbOnly = false}) => {
        let password = '';
        const passOptionsAccordToArgs = [
            piecesForPassword[0],
            (capLettIncluded)? piecesForPassword[1] : piecesForPassword[0],
            (integersIncluded)? piecesForPassword[2] : piecesForPassword[0],
            (symbolsIncluded)? piecesForPassword[3] : piecesForPassword[0],
        ]
        for (let i = 0; i < passwdLength; i++) {
            password += pickRandArr(passOptionsAccordToArgs, uniqueSymbOnly, password);
        }
        return password;
}
export { genPass, }