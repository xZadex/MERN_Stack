/* 
Given a search criteria object, whose values will only be
primitives (ints, strings, booleans) and a list of objects.
return any object that matches all the key value pairs in the search
criteria object.

Bonus: write a 2nd solution using built in methods to practice functional
programming.
*/

const items = [
{ firstName: "Bob", lastName: "Bobbert", age: 31 },
{ firstName: "John", lastName: "Smith", age: 25 },
{ firstName: "Bob", lastName: "Smith", age: 27 },
{ firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria1 = {
firstName: "Bob",
age: 31,
};
const expected1 = [
{ firstName: "Bob", lastName: "Bobbert", age: 31 },
{ firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria2 = {
lastName: "Smith",
};
const expected2 = [
{ firstName: "John", lastName: "Smith", age: 25 },
{ firstName: "Bob", lastName: "Smith", age: 27 },
];

/**
 * Finds the objects that match the given search criteria.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object} criteria
 * @param {Array<Object>} collection
 * @returns {Array<Object>} The found objects.
 */
function findObjects(criteria, collection) {
    let myArray = []
    for (let i=0;i<collection.length;i++){
        let match = true
        for(let key in collection[i]){
            for(let criteriaKey in criteria){
                if(criteriaKey === key){
                    console.log(collection[i][key], criteria[criteriaKey])
                    if(!(criteria[criteriaKey] === collection[i][key])){
                        match = false
                    }
                }
            }
        }
        if (match === true){
            myArray.push(collection[i])
        }
    }
    return myArray
}

// console.log(findObjects(searchCriteria2, items));
/**
 * - Time: O(?).
 * - Space: O(?).
 */
function findObjectsFunctional(criteria, collection) {
    const entries = Object.entries(criteria)
    return collection.filter(e => entries.every(([k,v]) => e[k] === v))
}

findObjectsFunctional(searchCriteria1, items)
/*****************************************************************************/