import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input, OnInit, output, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Note } from '../models/note';

@Component({
  selector: 'app-note-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteFormComponent {
// Input para recibir la nota a editar desde el componente padre
  noteToEdit = input<Note | null>(null);

  // Outputs para notificar al componente padre sobre acciones
  save = output<Note>();
  
  // Declaramos el FormGroup
  noteForm: FormGroup;
  isEditing = computed(() => !!this.noteToEdit());

  constructor(private fb: FormBuilder) {
    // Inicializamos el formulario con FormBuilder en el constructor
    this.noteForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  // Hook para actualizar el formulario cuando la nota de entrada cambia
  ngOnChanges() {
    const note = this.noteToEdit();
    if (note) {
      this.noteForm.patchValue({
        title: note.title,
        content: note.content
      });
    } else {
      this.noteForm.reset();
    }
  }
  
  // Limpia el formulario
  clearForm() {
    this.noteForm.reset();
  }

  // Guarda la nota y emite el evento al componente padre
  saveNote() {
    // Verificamos si el formulario es válido antes de continuar
    if (this.noteForm.valid) {
      const currentNote = this.noteToEdit();
      const newNote: Note = {
        id: currentNote ? currentNote.id : Date.now(),
        title: this.noteForm.value.title,
        content: this.noteForm.value.content
      };
      this.save.emit(newNote);
      this.clearForm();
    }
  }
}
