import { headingComponents } from '#src/components/Headers';

import Introduction from './index.mdx';

const pages = (await Promise.all([
  import('./ジェンダーとは.mdx'),
  import('./歴史.mdx'),
  import('./性別高揚感.mdx'),
  import('./身体的違和.mdx'),
  import('./生化学的違和.mdx'),
  import('./対人的違和.mdx'),
  import('./社会的違和.mdx'),
  import('./性的違和.mdx'),
  import('./表現的違和.mdx'),
  import('./実存的違和.mdx'),
  import('./管理された違和.mdx'),
  import('./インポスター症候群.mdx'),
  import('./私はトランスジェンダーなの.mdx'),
  import('./診断.mdx'),
  import('./治療.mdx'),
  import('./原因.mdx'),
  import('./染色体.mdx'),
  import('./ホルモン.mdx'),
  import('./二度目の思春期-男性化.mdx'),
  import('./二度目の思春期-女性化.mdx'),
  import('./後悔するだろうか.mdx'),
  import('./結論.mdx'),
])).map(({ default: Page }) => <Page components={headingComponents} />);

export const meta = {
  key: 'fulltext',
  title: '性別違和バイブル',
  description: '性別違和が現れる多様なかたちと、トランスジェンダーであるとはどういうことかを掘り下げる一冊。',
  url: '/ja/fulltext',
  image: '/ja/images/titlecard.png',
};

export default function Fulltext () {
  return (
    <div className="fulltext no-disclaimer">
      <Introduction components={headingComponents} />
      {pages}
    </div>
  );
}
