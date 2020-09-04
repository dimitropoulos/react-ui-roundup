import {
  h1,
  h2,
  h3,
  h4,
  p,
  link,
  comment,
  quote,
  checkmark,
  list,
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
    expect(p('Ziltoid')).toEndWith('Ziltoid\n');
    expect(link({
      text: 'Ziltoid',
      href: 'http://ziltoid.theomniscient.com',
    })).toEqual('[Ziltoid](http://ziltoid.theomniscient.com)');
    expect(comment('Ziltoid')).toEqual('<!--Ziltoid-->');
    expect(quote('Ziltoid')).toEndWith('> Ziltoid\n');
    expect(checkmark(undefined)).toEqual(':question:');
    expect(checkmark(true)).toEqual(':heavy_check_mark:');
    expect(checkmark(false)).toEqual(':x:');
  });

  it('renders lines', () => {
    expect(lines(['a', 'b', 'c'])).toEqual('a\nb\nc\n')
  })

  it('renders a table of contents', () => {
    const table = [
      {
        text: 'Ziltoid',
        href: 'http://localhost:1234/#Ziltoid',
      },
      [
        {
          text: 'The Omniscient',
          href: 'http://localhost:1234/#TheOmniscient',
        },
      ],
    ];

    const result = '- [Ziltoid](http://localhost:1234/#Ziltoid)\n  - [The Omniscient](http://localhost:1234/#TheOmniscient)\n\n';

    expect(tableOfContents(table)).toEndWith(result);
  });

  it('renders a list', () => {
    expect(unorderedList(['a', 'b', 'c'])).toEqual(`- a\n- b\n- c\n`);
    expect(unorderedList(['a', 'b', 'c', ['d']])).toEqual(`- a\n- b\n- c\n  - d\n`);
    expect(orderedList(['a', 'b', 'c', ['d', ['e']], 'f'])).toEqual(`1. a\n1. b\n1. c\n  1. d\n    1. e\n1. f\n`);
  });

});