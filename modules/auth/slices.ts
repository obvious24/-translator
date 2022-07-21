import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AccessToken } from './types';

export interface State {
  accessToken: AccessToken | undefined;
}

export const initialState: State = {
  accessToken: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    loginSucceed: (state: State, action: PayloadAction<AccessToken>) => {
      // 前回値に対して、データ変更箇所だけを更新しupdateDataに代入
      const LOGIN_SUCCEED = {
        ...state,
        accessToken: action.payload,
      };
      // ストアの値の更新
      return LOGIN_SUCCEED;
    },
    logoutSucceed: (state: State) => {
      // 前回値に対して、データ変更箇所だけを更新しupdateDataに代入
      const LOGOUT_SUCCEED = {
        ...state,
        accessToken: undefined,
      };
      // ストアの値の更新
      return LOGOUT_SUCCEED;
    },
    recoverySessionSucceed: (state: State, action: PayloadAction<AccessToken>) => {
      // 前回値に対して、データ変更箇所だけを更新しupdateDataに代入
      const RECOVERY_SESSION_SUCCEED = {
        ...state,
        accessToken: action.payload,
      };
      // ストアの値の更新
      return RECOVERY_SESSION_SUCCEED;
    },
  },
});

export const actions = authSlice.actions;

export const reducer = authSlice.reducer;
