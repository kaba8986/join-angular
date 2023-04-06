import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(taskList : any, searchTerm: string): any {
    if (taskList) {
        return taskList.filter((task: any) => {
          Object.values(task).includes(searchTerm);
        });
    }
}
}