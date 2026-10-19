import { FormattedMessage } from '#src/components/Intl';

const CssPrefix = 'ui-outdated';
export default function Outdated () {
  if (!this.lang?.outdated) return null;
  return (
    <aside classname={CssPrefix}>
      <FormattedMessage
        id="TRANSLATION_OUTDATED"
        values={{
          a: (...chunks) => <a href="/contributing/">{chunks}</a>,
          b: (...chunks) => <a href={`https://github.com/GenderDysphoria/GDB.FYI/blob/main/public/${this.lang.lang}`} target="_blank" rel="noreferrer">{chunks}</a>,
          c: (...chunks) => <a href={`https://github.com/GenderDysphoria/GDB.FYI/commits/main/public/en?since=${this.lang.since}`} target="_blank" rel="noreferrer">{chunks}</a>,
        }}
      />
    </aside>
  );
}
