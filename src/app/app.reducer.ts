import { ActionReducerMap } from '@ngrx/store';
import { ValidFilters } from './filter/filter.actions';
import { filterReducer } from './filter/filter.reducer';
import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/todo.reduces';

export interface AppState {
  todos: Todo[];
  filter: ValidFilters;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer,
};
