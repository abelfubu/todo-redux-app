import { createAction, props } from '@ngrx/store';

export type ValidFilters = 'all' | 'completed' | 'pending';

export const setFilter = createAction(
  '[FILTER] Set filter ',
  props<{ filter: ValidFilters }>()
);
