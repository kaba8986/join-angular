export class Task {
  title: string;
  description: string;
  category: string;
  dueDate: any;
  dueDateMilli: number;
  priority: string;
  subTasks: any;

  constructor(obj?: any) {
    this.title = obj ? obj.title : "";
    this.description = obj ? obj.description : "";
    this.category = obj ? obj.category : "General";
    this.dueDate = obj ? obj.dueDate : "";
    this.dueDateMilli = obj ? obj.dueDateMilli : 0;
    this.priority = obj ? obj.dueDateMilli : 'low';
    this.subTasks = obj ? obj.subTasks : [];
  }

  public toJSON() {
    return {
      title: this.title,
      description: this.description,
      category: this.category,
      dueDate: this.dueDate,
      dueDateMilli: this.dueDateMilli,
      priority: this.priority,
      subTasks: this.subTasks
    }
  }
}