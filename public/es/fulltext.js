import { headingComponents } from '#src/components/Headers';

import Introduction from './index.mdx';

const pages = (await Promise.all([
  import('./que-es-el-genero.mdx'),
  import('./historia.mdx'),
  import('./euforia.mdx'),
  import('./disforia-fisica.mdx'),
  import('./disforia-bioquimica.mdx'),
  import('./disforia-social.mdx'),
  import('./disforia-societal.mdx'),
  import('./disforia-sexual.mdx'),
  import('./disforia-de-presentacion.mdx'),
  import('./disforia-existencial.mdx'),
  import('./disforia-gestionada.mdx'),
  import('./sindrome-del-impostor.mdx'),
  import('./soy-trans.mdx'),
  import('./diagnosticos.mdx'),
  import('./tratamiento.mdx'),
  import('./causas.mdx'),
  import('./cromosomas.mdx'),
  import('./hormonas.mdx'),
  import('./segunda-pubertad-masc.mdx'),
  import('./segunda-pubertad-fem.mdx'),
  import('./remordimientos.mdx'),
  import('./conclusion.mdx'),
])).map(({ default: Page }) => <Page components={headingComponents} />);

export const meta = {
  key: 'fulltext',
  title: 'La Biblia de la Disforia de Género',
  description: 'Un clavado a las multitudes de formas en que se manifiesta la disforia de género y lo que significa ser transgénero.',
  url: '/es/fulltext',
  image: '/es/images/titlecard.png',
};

export default function Fulltext () {
  return (
    <div className="fulltext no-disclaimer">
      <Introduction components={headingComponents} />
      {pages}
    </div>
  );
}
