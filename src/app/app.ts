import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskApi } from './services/task-api';
import { TodoApi } from './models/task';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-app-angular-twenty');
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
