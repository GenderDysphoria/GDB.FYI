import clsx from 'clsx';

import Outdated from '#src/components/Outdated/Outdated';

const CssPrefix = 'ui-disclaimer';
export default function Disclaimer ({
  component: Component = 'aside',
  className,
  children,
  ...props
}) {
  const classes = clsx(
    className,
    CssPrefix
  );

  return (
    <>
      <Outdated />
      <Component {...props} className={classes}>{children}</Component>
    </>
  );
}
