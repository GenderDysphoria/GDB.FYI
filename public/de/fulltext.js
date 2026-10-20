import { headingComponents } from '#src/components/Headers';

import Introduction from './index.mdx';

const pages = (await Promise.all([
  import('./was-ist-gender.mdx'),
  import('./geschichte.mdx'),
  import('./euphorie.mdx'),
  import('./körperliche-dysphorie.mdx'),
  import('./biochemische-dysphorie.mdx'),
  import('./soziale-dysphorie.mdx'),
  import('./gesellschaftliche-dysphorie.mdx'),
  import('./sexuelle-dysphorie.mdx'),
  import('./präsentationsdysphorie.mdx'),
  import('./existentielle-dysphorie.mdx'),
  import('./gemanagte-dysphorie.mdx'),
  import('./impostor-syndrom.mdx'),
  import('./bin-ich-trans.mdx'),
  import('./diagnose.mdx'),
  import('./behandlung.mdx'),
  import('./ursache.mdx'),
  import('./chromosomen.mdx'),
  import('./hormone.mdx'),
  import('./androgene-zweite-pubertät.mdx'),
  import('./östrogene-zweite-pubertat.mdx'),
  import('./bereue.mdx'),
  import('./zusammenfassung.mdx'),
])).map(({ default: Page }) => <Page components={headingComponents} />);

export const meta = {
  key: 'fulltext',
  title: 'Die Gender Dysphorie Bibel',
  description: 'Eine ressource für diejenigen, die ihr geschlecht hinterfragen, sich bereits auf einer Gender-Reise befinden oder einfach nur mehr darüber erfahren möchten, was es bedeutet, transgender zu sein.',
  url: '/de/fulltext',
  image: '/de/images/titlecard.png',
};

export default function Fulltext () {
  return (
    <div className="fulltext no-disclaimer">
      <Introduction components={headingComponents} />
      {pages}
    </div>
  );
}
