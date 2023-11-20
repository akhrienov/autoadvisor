import { createSelector } from 'reselect'

import type { CommonState } from './common.reducer'
import type { RootState } from '../store'

const selectCommonReducer = (state: RootState) => state.common.value

export const selectGlobalLoaderActive = createSelector(
  selectCommonReducer,
  (common: CommonState) => common.globalLoaderActive
)
