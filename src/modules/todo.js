import {validateDate, parseDate} from "./utils.js"

export class Todo {
    constructor(title, dueDate, priority) {
        this.title = title;
        this.dueDate = validateDate(parseDate(dueDate));
        this.priority = priority;
        this.note = []; 
        this.checklist = [];
        this.nextNoteId = 1; // ID generation
        this.nextChecklistItemId = 1;
    }

    setTitle(newTitle) { 
        this.title = newTitle;
    }

    setPriority(newPriority) {
        this.priority = newPriority;
    }

    addNote(content) {
        const newNote = {
            id: this.nextNoteId++,
            content: content
        };
        this.note.push(newNote);
    }

    removeNote(id) {
        this.note = this.note.filter(item => item.id !== id);
    }

    addChecklistItem(content) {
        const newChecklistItem = {
            id: this.nextChecklistItemId++,
            content: content,
            completed: false
        };
        this.checklist.push(newChecklistItem);
    }

    removeChecklistItem(id) {
        this.checklist = this.checklist.filter(item => item.id !== id);
    }

    setDueDate(newDueDate) {
        let dateObj = parseDate(newDueDate);
        if (this.validateDate(dateObj)) {
            this.dueDate = dateObj;
        }
    }

}
