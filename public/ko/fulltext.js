import { headingComponents } from '#src/components/Headers';

import Introduction from './index.mdx';

const pages = (await Promise.all([
  import('./젠더가-무엇인가요.mdx'),
  import('./역사.mdx'),
  import('./행복감.mdx'),
  import('./신체적-불쾌감.mdx'),
  import('./생화학적-불쾌감.mdx'),
  import('./사회적-불쾌감.mdx'),
  import('./넓은-의미에서의-사회적-불쾌감.mdx'),
  import('./성적-불쾌감.mdx'),
  import('./표현적-불쾌감.mdx'),
  import('./존재적-불쾌감.mdx'),
  import('./관리되는-불쾌감.mdx'),
  import('./가면-증후군.mdx'),
  import('./제가-트랜스젠더일까요.mdx'),
  import('./진단.mdx'),
  import('./치료.mdx'),
  import('./원인.mdx'),
  import('./염색체.mdx'),
  import('./호르몬.mdx'),
  import('./이차-사춘기-남.mdx'),
  import('./이차-사춘기-여.mdx'),
  import('./후회.mdx'),
  import('./결론.mdx'),
])).map(({ default: Page }) => <Page components={headingComponents} />);

export const meta = {
  key: 'fulltext',
  title: '젠더 불쾌감 바이블',
  description: '젠더 불쾌감이 나타나게 되는 수많은 방식과 트랜스젠더 당사자인 것이 어떤 의미인지에 대한 탐구.',
  url: '/ko/fulltext',
  image: '/ko/images/titlecard.png',
};

export default function Fulltext () {
  return (
    <div className="fulltext no-disclaimer">
      <Introduction components={headingComponents} />
      {pages}
    </div>
  );
}
