import "./styles/style.css";
import {Todo} from "./modules/todo.js";

let todo = new Todo("nati", new Date(), "low")
todo.addNote("hello this is a note");
todo.addChecklistItem("hello this is a chedcklist");

console.log(todo);