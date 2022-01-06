// Arrays:

// Immutably add an item to the end of an array
export function addToEnd(array, item) {
    array = [...array,item]
    return array
}

// Immutably add an item to the beginning of an array
export function addToBeginning(array, item) {
    array = [item,...array]
    return array
}

// Immutably insert an item at a specific position/index within an array
export function insertItem(array, item, index) {
array = [...array.slice(0,index),item,...array.slice(index)]
return array
}

// Immutably replace an item at a specific position/index within an array
export function replaceItem(array, item, index) {
    array = [...array.slice(0,index),item,...array.slice(index+1)]
    return array
}

// Immutably remove an item at a specific position/index within an array
export function removeItem(array, index) {
    array = [...array.slice(0,index),...array.slice(index+1)]
    return array
}

//Objects:

// Immutably update the object so that the value under the "name" property becomes the new name
// For example calling:
//     updateName({ name: "Abe" }, "Barbara")
// should give back:
//     { name: "Barbara"}
export function updateName(object, newName) {
    object = {...object, name: newName}
  return object
}

// Immutably update the object so that the value under the "needsACupOfTea" property becomes the opposite of what it was.
// Any other properties in the object should be maintained.
// For example calling:
//     toggleTeaStatus({ name: "Abe", needsACupOfTea: false })
// should give back:
//     { name: "Abe", needsACupOfTea: true }
export function toggleTeaStatus(object) {
    object = {...object, needsACupOfTea: !object.needsACupOfTea}
    return object
}

// Combo Time!!

// Immutably update the array as well as the object at the given position/index within the array, so that the value under the "completed" property becomes the opposite of what it was.
// Any other properties in the object should be maintained.
// For example calling:
//    toggleListItemCompleted([{ task: "Cooking", completed: true }, { task: "Walking", completed: false }], 1)
// should give back:
//    [{ task: "Cooking", completed: true }, { task: "Walking", completed: true }]
export function toggleListItemCompleted(array, index) {
    console.log(array, index)
    var array2 = array.slice(index,index+1)
    array2 = {...array2[0], completed: !array2[0].completed}
    array = [...array.slice(0,index), array2, ...array.slice(index+1)]
    return array
}
