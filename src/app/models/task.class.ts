
export class Task {
  stage: number;
  title: string;
  description: string;
  category: string;
  assignments: any;
  dueDate: Date;
  dueDateMilli: number;
  creationDate: any;
  creationDateMilli: number;
  priority: string;
  subTasks: any;

  constructor(obj?: any) {
    this.stage = obj ? obj.stage : 0;
    this.title = obj ? obj.title : "";
    this.description = obj ? obj.description : "";
    this.category = obj ? obj.category : "General";
    this.assignments = obj ? obj.assignments : [];
    this.dueDate = obj ? obj.dueDate : null;
    this.dueDateMilli = obj ? obj.dueDateMilli : 0;
    this.creationDate = obj ? obj.creationDate : new Date();
    this.creationDateMilli = obj ? obj.creationDateMilli : 0;
    this.priority = obj ? obj.dueDateMilli : 'low';
    this.subTasks = obj ? obj.subTasks : [];
  }

  public toJSON() {
    return {
      stage: this.stage,
      title: this.title,
      description: this.description,
      category: this.category,
      assignments: this.assignments,
      dueDate: this.dueDate,
      dueDateMilli: this.dueDateMilli,
      creationDate: this.creationDate,
      creationDateMilli: this.creationDateMilli,
      priority: this.priority,
      subTasks: this.subTasks
    }
  }
}