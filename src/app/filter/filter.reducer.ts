import { createReducer, on } from '@ngrx/store';
import { setFilter, ValidFilters } from './filter.actions';

export const initialState: ValidFilters = 'all';

const _filterReducer = createReducer(
  initialState,
  on(setFilter, (state, { filter }) => filter)
);

export function filterReducer(state, action) {
  return _filterReducer(state, action);
}
