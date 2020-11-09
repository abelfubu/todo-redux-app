import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { setFilter, ValidFilters } from 'src/app/filter/filter.actions';
import { deleteCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  currentFilter: ValidFilters;
  filters: ValidFilters[] = ['all', 'completed', 'pending'];
  pendingTodos = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.currentFilter = state.filter;
      this.pendingTodos = state.todos.filter((todo) => !todo.completed).length;
    });
  }

  setCurrentFilter(filter: ValidFilters): void {
    this.store.dispatch(setFilter({ filter }));
  }

  deleteCompleted(): void {
    this.store.dispatch(deleteCompleted());
  }
}
