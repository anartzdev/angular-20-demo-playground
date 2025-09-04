import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { Note } from '../models/note';
import { CommonModule } from '@angular/common';
import { NoteFormComponent } from '../note-form/note-form.component';
import { NoteListComponent } from '../note-list/note-list';

@Component({
  selector: 'app-note-root',
  standalone: true,
  imports: [CommonModule, NoteFormComponent, NoteListComponent],
  templateUrl: './note-root.html',
  styleUrl: './note-root.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteRoot {
  // Señales para el estado de la aplicación
  notes = signal<Note[]>([]);
  editingNote = signal<Note | null>(null);

  // Maneja la nota guardada (crear o actualizar)
  onSaveNote(note: Note) {
    const isEditing = this.editingNote() && this.notes().some(n => n.id === this.editingNote()?.id);

    if (isEditing) {
      // Caso 1: Actualizar una nota existente
      this.notes.update(currentNotes => 
        currentNotes.map(n => n.id === note.id ? note : n)
      );
    } else {
      // Caso 2: Crear una nueva nota
      this.notes.update(currentNotes => [...currentNotes, note]);
    }
    this.editingNote.set(null);
  }

  // Maneja la selección de una nota para editar
  onEditNote(note: Note) {
    this.editingNote.set(note);
  }

  // Maneja la eliminación de una nota
  onDeleteNote(note: Note) {
    this.notes.update(currentNotes => currentNotes.filter(n => n.id !== note.id));
    
    // Si la nota que se está eliminando es la que está en el formulario de edición, lo limpiamos
    if (this.editingNote() && this.editingNote()?.id === note.id) {
        this.editingNote.set(null);
    }
  }
}
