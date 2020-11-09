import { createAction, props } from '@ngrx/store';

export const newTodo = createAction(
  '[TODO] New todo',
  props<{ text: string }>()
);

export const toggle = createAction(
  '[TODO] Toggle todo',
  props<{ id: number }>()
);

export const editTodo = createAction(
  '[TODO] Edit todo',
  props<{ id: number; text: string }>()
);

export const deleteTodo = createAction(
  '[TODO] Delete todo',
  props<{ id: number }>()
);

export const toggleAll = createAction(
  '[TODO] Toggle all todos',
  props<{ completed: boolean }>()
);

export const deleteCompleted = createAction('[TODO] Delete completed');
