import { headingComponents } from '#src/components/Headers';

import Introduction from './index.mdx';

const pages = (await Promise.all([
  import('./qu-est-ce-que-le-genre.mdx'),
  import('./histoire.mdx'),
  import('./euphorie.mdx'),
  import('./dysphorie-physique.mdx'),
  import('./dysphorie-biochimique.mdx'),
  import('./dysphorie-sociale.mdx'),
  import('./dysphorie-societale.mdx'),
  import('./dysphorie-sexuelle.mdx'),
  import('./dysphorie-de-presentation.mdx'),
  import('./dysphorie-existentielle.mdx'),
  import('./dysphorie-geree.mdx'),
  import('./syndrome-d-imposteur.mdx'),
  import('./est-ce-que-je-suis-trans.mdx'),
  import('./diagnostiques.mdx'),
  import('./traitement.mdx'),
  import('./causes.mdx'),
  import('./chromosomes.mdx'),
  import('./hormones.mdx'),
  import('./deuxieme-puberte-androgenique.mdx'),
  import('./deuxieme-puberte-oestrogenique.mdx'),
  import('./regrets.mdx'),
  import('./conclusion.mdx'),
])).map(({ default: Page }) => <Page components={headingComponents} />);

export const meta = {
  key: 'fulltext',
  title: 'La Bible de la Dysphorie de Genre',
  description: 'Une plongée dans la multitude de façons dont la dysphorie de genre se manifeste et ce que signifie être transgenre.',
  url: '/fr/fulltext',
  image: '/fr/images/titlecard.png',
};

export default function Fulltext () {
  return (
    <div className="fulltext no-disclaimer">
      <Introduction components={headingComponents} />
      {pages}
    </div>
  );
}
