import { Component, inject, OnInit } from '@angular/core';
import { TodoApi } from '@app/core/models/task';
import { TaskApi } from '@app/core/services/task-api';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  taskService = inject(TaskApi);

  private getTasks = () => this.taskService.todos() || [];
  private updateTasks = (tasks: TodoApi[]) =>  this.taskService.updateTodos(tasks);
  public toggleCompleted(todoToUpdate: TodoApi): void {

    const updatedTodos = this.getTasks().map(todo => {
      if (todo.id === todoToUpdate.id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    });

    // ⭐️ Usamos el método del servicio para actualizar la señal
     this.updateTasks(updatedTodos);
  }

  checkAll(completed: boolean) {

    const updatedTodos = this.getTasks().map(todo => {
        return {
          ...todo,
          completed
        };
      
    });

    // ⭐️ Usamos el método del servicio para actualizar la señal
    this.updateTasks(updatedTodos);
  }

}
