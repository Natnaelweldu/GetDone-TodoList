import "./styles/style.css";
import { Project } from "./modules/project";

// let todo = new Todo("nati", new Date(), "low")
// todo.addNote("hello this is a note");
// todo.addChecklistItem("hello this is a chedcklist");

const project = new Project("daily", "used to record daily tasks");
project.addTodo("shop for food", new Date(), "high");
project.todos[0].addNote("dont forget the milk");
project.todos[0].addChecklistItem("bring the milk");



console.log(project);