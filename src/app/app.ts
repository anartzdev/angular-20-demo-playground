import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TodosComponent} from './features/project0/todos.component';
import { NoteRoot } from './features/project1/note-root/note-root';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodosComponent, NoteRoot],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-app-angular-twenty');
}
