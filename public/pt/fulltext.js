import { headingComponents } from '#src/components/Headers';

import Introduction from './index.mdx';

const pages = (await Promise.all([
  import('./que-e-genero.mdx'),
  import('./historia.mdx'),
  import('./euforia.mdx'),
  import('./disforia-fisica.mdx'),
  import('./disforia-bioquimica.mdx'),
  import('./disforia-social.mdx'),
  import('./disforia-societal.mdx'),
  import('./disforia-sexual.mdx'),
  import('./disforia-apresentacional.mdx'),
  import('./disforia-existencial.mdx'),
  import('./disforia-gerenciada.mdx'),
  import('./sindrome-de-impostor.mdx'),
  import('./eu-sou-trans.mdx'),
  import('./diagnosticos.mdx'),
  import('./tratamento.mdx'),
  import('./causas.mdx'),
  import('./cromossomos.mdx'),
  import('./hormonios.mdx'),
  import('./segunda-puberdade-masc.mdx'),
  import('./segunda-puberdade-fem.mdx'),
  import('./arrependimentos.mdx'),
  import('./conclusao.mdx'),
])).map(({ default: Page }) => <Page components={headingComponents} />);

export const meta = {
  key: 'fulltext',
  title: 'A Bíblia da Disforia de Gênero',
  description: 'Um mergulho na multitude de formas que a disforia de gênero se manifesta e o que significa ser transgênero.',
  url: '/pt/fulltext',
  image: '/pt/images/titlecard.png',
};

export default function Fulltext () {
  return (
    <div className="fulltext no-disclaimer">
      <Introduction components={headingComponents} />
      {pages}
    </div>
  );
}
