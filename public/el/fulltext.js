import { headingComponents } from '#src/components/Headers';

import Introduction from './index.mdx';

const pages = (await Promise.all([
  import('./ti-shmainei-gender.mdx'),
  import('./istoria.mdx'),
  import('./euforia.mdx'),
  import('./swmatikh-dysforia.mdx'),
  import('./vioxhmikh-dysforia.mdx'),
  import('./diaproswpikh-dysforia.mdx'),
  import('./koinwnikh-dysforia.mdx'),
  import('./seksoualikh-dysforia.mdx'),
  import('./parousiastikh-dysforia.mdx'),
  import('./yparksiakh-dysforia.mdx'),
  import('./elegxomenh-dysforia.mdx'),
  import('./syndromo-tou-apatewna.mdx'),
  import('./eimai-trans.mdx'),
  import('./diagnwseis.mdx'),
  import('./perithalpsh.mdx'),
  import('./aities.mdx'),
  import('./xrwmoswmata.mdx'),
  import('./ormones.mdx'),
  import('./deuterh-efhveia-andr.mdx'),
  import('./deuterh-efhveia-gyn.mdx'),
  import('./typseis.mdx'),
  import('./symperasma.mdx'),
])).map(({ default: Page }) => <Page components={headingComponents} />);

export const meta = {
  key: 'fulltext',
  title: 'Η Βίβλος της Δυσφορίας Φύλου',
  description: 'Μια εισαγωγή στους πολλαπλούς τρόπους με τους οποίους εκδηλώνεται η δυσφορία φύλου και στο τι σημαίνει να είσαι τρανς.',
  url: '/el/fulltext',
  image: '/el/images/titlecard.png',
};

export default function Fulltext () {
  return (
    <div className="fulltext no-disclaimer">
      <Introduction components={headingComponents} />
      {pages}
    </div>
  );
}
