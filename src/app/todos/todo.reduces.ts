import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import {
  deleteCompleted,
  deleteTodo,
  editTodo,
  newTodo,
  toggle,
  toggleAll,
} from './todo.actions';

export const initialState = [new Todo('Save the world')];

const _todoReducer = createReducer(
  initialState,
  on(newTodo, (state, { text }) => [...state, new Todo(text)]),
  on(toggle, (state, { id }) =>
    state.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  ),
  on(editTodo, (state, { id, text }) =>
    state.map((todo) => (todo.id === id ? { ...todo, text } : todo))
  ),
  on(deleteTodo, (state, { id }) => state.filter((todo) => todo.id !== id)),
  on(toggleAll, (state, { completed }) =>
    state.map((todo) => ({ ...todo, completed }))
  ),
  on(deleteCompleted, (state) => state.filter((todo) => !todo.completed))
);

export const todoReducer = (state, action) => _todoReducer(state, action);
