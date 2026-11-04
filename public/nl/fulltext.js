import { headingComponents } from '#src/components/Headers';

import Introduction from './index.mdx';

const pages = (await Promise.all([
  import('./wat-is-gender.mdx'),
  import('./geschiedenis.mdx'),
  import('./euforie.mdx'),
  import('./fysieke-dysforie.mdx'),
  import('./biochemische-dysforie.mdx'),
  import('./sociale-dysforie.mdx'),
  import('./maatschappelijke-dysforie.mdx'),
  import('./seksuele-dysforie.mdx'),
  import('./presentationele-dysforie.mdx'),
  import('./existentiele-dysforie.mdx'),
  import('./beheerste-dysforie.mdx'),
  import('./impostor-syndroom.mdx'),
  import('./ben-ik-trans.mdx'),
  import('./diagnoses.mdx'),
  import('./behandeling.mdx'),
  import('./oorzaken.mdx'),
  import('./chromosomen.mdx'),
  import('./hormonen.mdx'),
  import('./tweede-puberteit-masc.mdx'),
  import('./tweede-puberteit-fem.mdx'),
  import('./spijt.mdx'),
  import('./conclusie.mdx'),
])).map(({ default: Page }) => <Page components={headingComponents} />);

export const meta = {
  key: 'fulltext',
  title: 'De Genderdysforie Bijbel',
  description: 'Een duik in de vele manieren waarop genderdysforie zich manifesteert en wat het betekent om transgender te zijn.',
  url: '/nl/fulltext',
  image: '/nl/images/titlecard.png',
};

export default function Fulltext () {
  return (
    <div className="fulltext no-disclaimer">
      <Introduction components={headingComponents} />
      {pages}
    </div>
  );
}
