/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint import/no-cycle: [2, { maxDepth: 1 }] */
import { isAccessToken } from '../../dto/accessToken';
import customfetch from '../../utils/fetch/customfetch';
import { voidValidator } from '../../utils/fetch/customFetchUtil';
import { appActions } from '../app';
import { Dispatch } from '../index';
import { actions } from './actions';

/**
 * POST /api/auth/login
 *
 * @param onSuccess 成功時コールバック。基本的に router.push('/') するのが目的。この関数でuseRouterしたくないから貰う。
 */
export const login = async (
  dispatch: Dispatch,
  loginName: string,
  password: string,
  onSuccess?: () => void,
): Promise<void> => {
  try {
    dispatch(appActions.loadingProgress());

    const method = 'POST';
    const path = '/auth/token';
    const query = { loginName, password };

    const data = await customfetch(path, { method, query }, isAccessToken);

    dispatch(appActions.loadingComplete(''));
    dispatch(actions.loginSucceed(data));

    if (onSuccess) onSuccess();
  } catch (error) {
    dispatch(appActions.loadingFailed(error.message));
  }
};

/**
 * POST /api/auth/logout
 *
 * @param onSuccess 成功時コールバック。基本的に router.push('/') するのが目的。この関数でuseRouterしたくないから貰う。
 */
export const logout = async (dispatch: Dispatch, onSuccess?: () => void): Promise<void> => {
  try {
    dispatch(appActions.loadingProgress());

    const method = 'POST';
    const path = '/auth/logout';

    await customfetch(path, { method }, voidValidator);

    dispatch(appActions.loadingComplete('ログアウトしました'));
    dispatch(actions.logoutSucceed());

    if (onSuccess) onSuccess();
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    dispatch(appActions.loadingFailed(error.message));
  }
};

/**
 * GET /api/auth/me
 *
 * @param onError 失敗時コールバック。基本的に router.push('/') するのが目的。この関数でuseRouterしたくないから貰う。
 */
export const recoverySession = async (dispatch: Dispatch, onError: (message: string) => void): Promise<void> => {
  try {
    const method = 'GET';
    const path = '/auth/me';

    const data = await customfetch(path, { method }, isAccessToken);

    dispatch(actions.recoverySessionSucceed(data));
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    onError(error.message);
  }
};
