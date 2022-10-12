import { Endpoints } from '@octokit/types';

export type RepoInfo = Endpoints['GET /repos/{owner}/{repo}']['response']['data'];

export type URL = string;

export type Sentence = `${string}.`;

export type CapitalLetter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';

export interface BaseComponent {
  componentId: string;

  /** What the Framework _calls_ this component.  That is to say: when you import it, what is the name of the React Element when it is used. */
  componentName: `${CapitalLetter}${string}`;

  componentURL: string;
}
