import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { toggleAll } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css'],
})
export class TodoPageComponent implements OnInit {
  todosToggle: FormControl;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.todosToggle = new FormControl(false);
    this.todosToggle.valueChanges.subscribe((value) =>
      this.toggleAllTodos(value)
    );
  }

  toggleAllTodos(done: boolean): void {
    this.store.dispatch(toggleAll({ completed: done }));
  }
}
