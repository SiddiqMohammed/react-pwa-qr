import { action } from 'typesafe-actions';

import ActionTypes from './constants';

export const loadRepos = () => action(ActionTypes.LOAD_REPOS);
export const reposLoaded = (repos: any, username: string) =>
  action(ActionTypes.LOAD_REPOS_SUCCESS, { repos: repos, username: username });
export const repoLoadingError = (error: object) =>
  action(ActionTypes.LOAD_REPOS_ERROR, error);
