const piecesForPassword = [
    [...Array.from(Array(26)).map((val, ind) => val = String.fromCharCode(ind + 97))],
    [...Array.from(Array(26)).map((val, ind) => val = String.fromCharCode(ind + 65))], // Big ones
    [0,1,2,3,4,5,6,7,8,9],
    ['@','#','$','%','*','_'],
]

const randIntRange = (s, e) => Math.floor(s + Math.random() * (e + 1 - s));

const pickRandArr = (arr, uniqueSymb, recipient) => {
    const key = arr[randIntRange(0,3)];
    const val = key[randIntRange(0, key.length-1)];
    if (uniqueSymb && recipient.includes(val)) {
        return pickRandArr(arr, uniqueSymb, recipient)
    } 
    return val;
}

const genPass = (
    passLength = 5,
    capLetters = false, 
    integers = false, 
    symb = false,
    uniqueSymb = false) => {
        let password = '';
        const passOptionsAccordToArgs = [
            piecesForPassword[0],
            (capLetters)? piecesForPassword[1] : piecesForPassword[0],
            (integers)? piecesForPassword[2] : piecesForPassword[0],
            (symb)? piecesForPassword[3] : piecesForPassword[0],
        ]
        for (let i = 0; i < passLength; i++) {
            password += pickRandArr(passOptionsAccordToArgs, uniqueSymb, password);
        }
        return password;
}
export { genPass, }
