const LOGIN_SUCCEED = 'auth/LOGIN_SUCCEED' as const;
const LOGOUT_SUCCEED = 'auth/LOGOUT_SUCCEED' as const;
const RECOVERY_SESSION_SUCCEED = 'auth/RECOVERY_SESSION_SUCCEED' as const;

export { LOGIN_SUCCEED, LOGOUT_SUCCEED, RECOVERY_SESSION_SUCCEED };

export type AccessToken = {
  userId: string;
  userName: string;
  accessToken: string;
};
