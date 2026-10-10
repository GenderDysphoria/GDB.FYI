import clsx from 'clsx';

import Button from '#src/components/Button';
import SvgIcon from '#src/components/SvgIcon';

const CssPrefix = 'ui-pager';
export default function Paper ({
  component: Component = 'div',
  className,
  ...props
}) {
  const classes = clsx(
    className,
    CssPrefix
  );

  const next = this.metadata.next && this.pages[this.metadata.next];
  const prev = this.metadata.previous && this.pages[this.metadata.previous];
  const { rtl } = this.metadata;

  if (!next && !prev) return null;

  return (
    <Component className={classes}>
      {prev
        ? (
        <Button variant="contained" color="primary" size="sm" href={prev.url} className="prev">
          {rtl ? <SvgIcon icon="angle-right" aria-hidden="true" /> : <SvgIcon icon="angle-left" aria-hidden="true" />}
          <span>{prev.linkTitle}</span>
        </Button>
          )
        : (
        <div />
          )}
      {next && (
        <Button variant="contained" color="primary" size="sm" href={next.url} className="next">
          <span>{next.linkTitle}</span>
          {rtl ? <SvgIcon icon="angle-left" aria-hidden="true" /> : <SvgIcon icon="angle-right" aria-hidden="true" />}
        </Button>
      )}
    </Component>
  );
}
