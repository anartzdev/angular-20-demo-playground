import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteRoot } from './note-root';

describe('NoteRoot', () => {
  let component: NoteRoot;
  let fixture: ComponentFixture<NoteRoot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteRoot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteRoot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
