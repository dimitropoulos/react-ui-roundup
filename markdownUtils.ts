import {
  repeat,
  length,
  map,
  join,
  pipe,
  sortBy,
  prop,
} from 'ramda';
import { URL, DesignKit, FrameworkFeaturesById } from './entities';

export const lines = join('\n');

export const h1 = (text: string) => `# ${text}\n`;
export const h2 = (text: string) => `## ${text}\n`;
export const h3 = (text: string) => `### ${text}\n`;
export const p = (text: string) => `${text}\n`;
export const link = ({ text, href }: { text: string; href: URL }) => `[${text}](${href})`;
export const comment = (text: string) => `<!-- ${text} -->`;
export const inlineCode = (text: string) => `\`${text}\``;
export const checkmark = (value: boolean | undefined) => value === undefined ? ':question:' : value ? ':heavy_check_mark:' : ':x:';

export const row = (data: string[]) => `| ${join(' | ', data)} |`;

export const table = ({ headers, rows }: { headers: string[], rows: string[][] }) => {
  return lines([
    row(headers),
    row(repeat('---', length(headers))),
    ...map(row, rows),
    '',
  ]);
};

export const stringArray = (input: string[] | null) => input ? pipe(
  map(inlineCode),
  join(', '),
)(input.sort()) : '';

export const designKits = (designKits: FrameworkFeaturesById['designKits']) => designKits !== false ? (
  pipe<DesignKit[], DesignKit[], { text: string, href: string }[], string[], string>(
    sortBy(prop('type')),
    map(({ type, href }) => ({ text: type, href: href })),
    map(link),
    join(', '),
  )(designKits)
) : checkmark(false);

export const themer = (themer: FrameworkFeaturesById['themer']) => themer !== false ? (
  link({ text: 'True', href: themer })
) : checkmark(themer);
