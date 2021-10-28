import { Endpoints } from '@octokit/types';

export type RepoInfo = Endpoints['GET /repos/{owner}/{repo}']['response']['data'];

export type URL = string;

export type Sentence = `${string}.`;

export interface BaseComponent {
  componentId: string;

  /** What the Framework _calls_ this component.  That is to say: when you import it, what is the name of the React Element when it is used. */
  componentName: string;

  componentURL: string;
}
