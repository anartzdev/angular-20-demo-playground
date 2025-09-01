import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TodoApi } from '@models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskApi {
  private http = inject(HttpClient);
  private API_URL = 'https://jsonplaceholder.typicode.com/todos?_limit=20';

  // ⭐️ Señal de solo lectura que carga datos de la API
  private _apiTodos = toSignal(this.http.get<TodoApi[]>(this.API_URL));

  // ⭐️ Señal de escritura que el componente puede modificar
  public todos = signal<TodoApi[] | undefined>(undefined);

  // ⭐️ Señal `computed` que devuelve el número de tareas no completadas
  public notCompletedCount = computed(() => {
    // Lee la señal 'todos' para que el `computed` sepa que depende de ella
    const currentTodos = this.todos();
    // Filtra las tareas no completadas y devuelve la longitud del array
    return currentTodos
      ? currentTodos.filter((todo) => !todo.completed).length
      : 0;
  });
  constructor() {
    // ⭐️ Efecto que se dispara cada vez que los datos de la API cambian
    effect(() => {
      const apiTodos = this._apiTodos();
      if (apiTodos) {
        // Inicializa la señal con los datos de la API
        this.todos.set(apiTodos);
      }
    });
  }

  // ⭐️ Método público para actualizar la señal de tareas
  public updateTodos(updatedList: TodoApi[]): void {
    this.todos.set(updatedList);
  }
}
