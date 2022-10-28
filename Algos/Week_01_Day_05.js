/* 
Efficiently combine two already sorted multiset arrays 
into an array containing the sorted set intersection of the two.
Output: only the shared values between the two arrays (deduped).
Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];

/**
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
function orderedIntersection(sortedA, sortedB) {
    let myTable = {};
    let myTable2 = {};
    let returnArray = [];
    for(let i=0;i<sortedA.length;i++){
        if(sortedA[i] in myTable){
            myTable[sortedA[i]] += 1;
        } else {
            myTable[sortedA[i]] = 1;
        }
    }
    for(let j=0;j<sortedB.length;j++){
        if(sortedB[j] in myTable2){
            myTable2[sortedB[j]] += 1;
        } else {
            myTable2[sortedB[j]] = 1;
        }
    }
    for(key in myTable){
        if(key in myTable2){
            returnArray.push(key);
        }
    }
    return returnArray;
}

/*****************************************************************************/

console.log(orderedIntersection(numsA2, numsB2));
console.log(orderedIntersection([1,2,2,3,4,5,6,7],[]));