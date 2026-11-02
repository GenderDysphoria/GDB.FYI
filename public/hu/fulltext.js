import { headingComponents } from '#src/components/Headers';

import Introduction from './index.mdx';

const pages = (await Promise.all([
  import('./mi-is-az-a-gender.mdx'),
  import('./tortenelmi-attekintes.mdx'),
  import('./euforia.mdx'),
  import('./testi-diszforia.mdx'),
  import('./biokemiai-diszforia.mdx'),
  import('./tarsasagi-diszforia.mdx'),
  import('./tarsadalmi-diszforia.mdx'),
  import('./szexualis-diszforia.mdx'),
  import('./kinezeti-diszforia.mdx'),
  import('./egzisztencialis-diszforia.mdx'),
  import('./kezelt-diszforia.mdx'),
  import('./imposztor-szindroma.mdx'),
  import('./transz-vagyok.mdx'),
  import('./klinikai-diagnozisok.mdx'),
  import('./kezeles.mdx'),
  import('./okok.mdx'),
  import('./kromoszomak.mdx'),
  import('./hormonok.mdx'),
  import('./masodik-pubertas-masc.mdx'),
  import('./masodik-pubertas-fem.mdx'),
  import('./sajnalja.mdx'),
  import('./vegszo.mdx'),
])).map(({ default: Page }) => <Page components={headingComponents} />);

export const meta = {
  key: 'fulltext',
  title: 'A Gender Diszfória Biblia',
  description: 'Betekintés a nemi diszfória sokféle megnyilvánulási formájába, illetve hogy mit jelent transzneműnek lenni.',
  url: '/hu/fulltext',
  image: '/hu/images/titlecard.png',
};

export default function Fulltext () {
  return (
    <div className="fulltext no-disclaimer">
      <Introduction components={headingComponents} />
      {pages}
    </div>
  );
}
