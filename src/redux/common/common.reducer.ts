import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  value: CommonState
}

export type CommonState = {
  readonly globalLoaderActive: boolean
}

const COMMON_INITIAL_STATE = {
  value: {
    globalLoaderActive: true,
  } as CommonState,
} as InitialState

export const commonSlice = createSlice({
  name: 'common',
  initialState: COMMON_INITIAL_STATE,
  reducers: {
    switchGlobalLoaderToState: (state, action: PayloadAction<{ state: boolean }>): void => {
      state.value.globalLoaderActive = action.payload.state
    },
  },
})

export const { switchGlobalLoaderToState } = commonSlice.actions
export default commonSlice.reducer
