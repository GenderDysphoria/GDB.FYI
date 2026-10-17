import { headingComponents } from '#src/components/Headers';

import Introduction from './index.mdx';

const pages = (await Promise.all([
  import('./什么是性别.mdx'),
  import('./历史.mdx'),
  import('./欣快.mdx'),
  import('./身体不安.mdx'),
  import('./生化不安.mdx'),
  import('./社交不安.mdx'),
  import('./社会不安.mdx'),
  import('./性不安.mdx'),
  import('./外表不安.mdx'),
  import('./存在不安.mdx'),
  import('./应对不安.mdx'),
  import('./冒名顶替综合征.mdx'),
  import('./我是跨性别吗.mdx'),
  import('./诊断.mdx'),
  import('./治疗.mdx'),
  import('./成因.mdx'),
  import('./染色体.mdx'),
  import('./激素.mdx'),
  import('./雄二青春期.mdx'),
  import('./雌二青春期.mdx'),
  import('./后悔.mdx'),
  import('./结语.mdx'),
])).map(({ default: Page }) => <Page components={headingComponents} />);

export const meta = {
  key: 'fulltext',
  title: '性别烦躁指南',
  description: '为那些正在质疑探索中的人、那些在跨性别道路上的人和单纯想成为盟友的人提供资源。',
  url: '/zh-cn/fulltext',
  image: '/zh-cn/images/titlecard.png',
};

export default function Fulltext () {
  return (
    <div className="fulltext no-disclaimer">
      <Introduction components={headingComponents} />
      {pages}
    </div>
  );
}
