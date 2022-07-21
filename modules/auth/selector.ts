/* eslint-disable import/prefer-default-export */
/* eslint import/no-cycle: [2, { maxDepth: 1 }] */
import { State } from '..';
import { createSelector } from 'reselect';
import { AccessToken } from './types';

const userSelector = (state: State): AccessToken | undefined => state.auth.accessToken;

export const getAccessToken = createSelector([userSelector], (state) => state?.accessToken);
