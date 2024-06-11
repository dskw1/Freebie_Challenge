class Todo {
    constructor(name, date, complete) {
        this.name = new String(name);
      
      if (!(date instanceof Date) || isNaN(date)) {
            throw new Error('Invalid date');
        }
        this.date = date;

        this.complete = new Boolean(complete);
        this._description = undefined;
    }
  
static markAs(todo, status) {
        if (todo instanceof Todo) {
            todo.complete = new Boolean(status);
        }
      }
