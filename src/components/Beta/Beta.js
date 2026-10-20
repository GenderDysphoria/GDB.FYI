import { H4 } from '#src/components/Headers';

const CssPrefix = 'ui-beta-announce';
export default function BetaAnnounce () {
  return (
    <aside classname={CssPrefix}>
      <H4>Pre-Release Content</H4>

      <p>You are looking at the preview of the new Gender Dysphoria Bible website. This version does not yet have all of the translations that are available on the old site, so if you are looking for a language that isn't listed in the menu on the side of the page, <a href="https://v1.gdb.fyi">it may be available on the old site.</a></p>
    </aside>
  );
}
