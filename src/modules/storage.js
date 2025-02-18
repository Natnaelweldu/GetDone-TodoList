export function saveToLocalStorage(obj, name){
    let jsonString = JSON.stringify(obj);
    localStorage.setItem(name, jsonString);
}

export function retriveFromLocalStorage(name) {
    let retrivedString = localStorage.getItem(name);
    let obj = JSON.parse(retrivedString);
    
    return obj;
}