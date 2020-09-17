import {
  h1,
  h2,
  h3,
  h4,
  paragraph,
  link,
  comment,
  quote,
  checkmark,
  unorderedList,
  lines,
  orderedList,
  tableOfContents,
} from './utils';

describe('tests markdown utils', () => {
  it('works for basic elements', () => {
    expect(h1('Ziltoid')).toEndWith('# Ziltoid\n');
    expect(h2('Ziltoid')).toEndWith('## Ziltoid\n');
    expect(h3('Ziltoid')).toEndWith('### Ziltoid\n');
    expect(h4('Ziltoid')).toEndWith('#### Ziltoid\n');
    expect(paragraph('Ziltoid')).toEndWith('Ziltoid\n');
    expect(link({
      href: 'http://ziltoid.theomniscient.com',
      text: 'Ziltoid',
    })).toStrictEqual('[Ziltoid](http://ziltoid.theomniscient.com)');
    expect(comment('Ziltoid')).toStrictEqual('<!--Ziltoid-->');
    expect(quote('Ziltoid')).toEndWith('> Ziltoid\n');
    expect(checkmark(undefined)).toStrictEqual(':question:');
    expect(checkmark(true)).toStrictEqual(':heavy_check_mark:');
    expect(checkmark(false)).toStrictEqual(':x:');
  });

  it('renders lines', () => {
    expect(lines(['a', 'b', 'c'])).toStrictEqual('a\nb\nc\n');
  });

  it('renders a table of contents', () => {
    const table = [
      {
        href: 'http://localhost:1234/#Ziltoid',
        text: 'Ziltoid',
      },
      [
        {
          href: 'http://localhost:1234/#TheOmniscient',
          text: 'The Omniscient',
        },
      ],
    ];

    const result = '- [Ziltoid](http://localhost:1234/#Ziltoid)\n  - [The Omniscient](http://localhost:1234/#TheOmniscient)\n\n';

    expect(tableOfContents(table)).toEndWith(result);
  });

  it('renders a list', () => {
    expect(unorderedList(['a', 'b', 'c'])).toStrictEqual('- a\n- b\n- c\n');
    expect(unorderedList(['a', 'b', 'c', ['d']])).toStrictEqual('- a\n- b\n- c\n  - d\n');
    expect(orderedList(['a', 'b', 'c', ['d', ['e']], 'f'])).toStrictEqual('1. a\n1. b\n1. c\n  1. d\n    1. e\n1. f\n');
  });

});
