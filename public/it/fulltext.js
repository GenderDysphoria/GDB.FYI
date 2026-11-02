import { headingComponents } from '#src/components/Headers';

import Introduction from './index.mdx';

const pages = (await Promise.all([
  import('./che-cosa-è-il-genere.mdx'),
  import('./storia.mdx'),
  import('./euforia.mdx'),
  import('./disforia-fisica.mdx'),
  import('./disforia-biochimica.mdx'),
  import('./disforia-sociale.mdx'),
  import('./disforia-di-ruolo.mdx'),
  import('./disforia-sessuale.mdx'),
  import('./disforia-di-presentazione.mdx'),
  import('./disforia-esistenziale.mdx'),
  import('./disforia-gestita.mdx'),
  import('./sindrome-dell-impostore.mdx'),
  import('./sono-trans.mdx'),
  import('./diagnosi.mdx'),
  import('./trattamento.mdx'),
  import('./cause.mdx'),
  import('./cromosomi.mdx'),
  import('./ormoni.mdx'),
  import('./seconda-pubertà-masc.mdx'),
  import('./seconda-pubertà-fem.mdx'),
  import('./rimpianti.mdx'),
  import('./conclusione.mdx'),
])).map(({ default: Page }) => <Page components={headingComponents} />);

export const meta = {
  key: 'fulltext',
  title: 'La Bibbia della Disforia di Genere',
  description: 'Un tuffo fra i mille modi in cui la disforia di genere si manifesta e su cosa significa essere trasngender.',
  url: '/it/fulltext',
  image: '/it/images/titlecard.png',
};

export default function Fulltext () {
  return (
    <div className="fulltext no-disclaimer">
      <Introduction components={headingComponents} />
      {pages}
    </div>
  );
}
