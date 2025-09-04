import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { TodoItem, TodoItemsApi } from '@app/core/models/todo';
import { TodoApi } from '@app/core/services/task-api';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  taskService = inject(TodoApi);

  private getTasks = () => this.taskService.todos() || [];
  private updateTasks = (tasks: TodoItemsApi) =>  this.taskService.updateTodos(tasks);
  public toggleCompleted(todoToUpdate: TodoItem): void {

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
