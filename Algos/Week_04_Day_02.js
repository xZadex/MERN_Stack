    /* 
    Given two strings S and T containing only lowercase letters and "#" characters,
    return if they are equal when both are typed into empty text editors.
    
    # character means a backspace character.
    i.e., after processing the backspaces, are the two strings equal?
    Bonus: solve in O(n) time
    */

const S1 = "ab#c";
const T1 = "ad#c";
const expected1 = true;
// Explanation: Both S and T become "ac"

const S2 = "ab##";
const T2 = "c#d#";
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
const T3 = "#a#c";
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
const T4 = "b";
const expected4 = false;

const S5 = "a#cb##b";
const T5 = "b";
const expected5 = false;
// Explanation: S becomes "c" while T becomes "b".
    
function backspaceStringCompare(S, T) {
    let arr01 = []
    let arr02 = []

    for(let i=0;i<S.length;i++){
        S[i] === "#" ? arr01 = arr01.slice(0, -1) : arr01+=S[i];
    }

    for(let j=0;j<T.length;j++){
        T[i] === "#" && T[i] ? arr02 = arr02.slice(0, -1) : arr02+=T[i]
    }

    return arr01.join() === arr02.join()
}

console.log(backspaceStringCompare(S1, T1))
console.log(backspaceStringCompare(S2, T2))
console.log(backspaceStringCompare(S3, T3))
console.log(backspaceStringCompare(S4, T4))
console.log(backspaceStringCompare(S5, T5))








// function backspaceStringCompare2(S, T) {
//     let arr01 = ""
//     let arr02 = ""
//     for(let i=0;i<S.length;i++){
//         S[i] === "#" ? arr01 = arr01.slice(0, -1) : arr01+=S[i];
//         T[i] === "#" && T[i] ? arr02 = arr02.slice(0, -1) : arr02+=T[i]
//     }
//     return arr01 === arr02
// }
// console.log(backspaceStringCompare2(S5, T5))
/*****************************************************************************/