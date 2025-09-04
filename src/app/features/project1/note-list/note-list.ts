import { Component, input, output } from '@angular/core';
import { Note } from '../models/note';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note-list',
  imports: [CommonModule],
  templateUrl: './note-list.html',
  styleUrl: './note-list.css'
})
export class NoteListComponent {
// Input para recibir el array de notas desde el componente padre
  notes = input<Note[]>([]);
  
  // Outputs para notificar al componente padre de la edición o eliminación
  edit = output<Note>();
  delete = output<Note>();
}
