import clsx from 'clsx';

const CssPrefix = 'ui-bargraph';
export default function BarGraph ({
  component: Component = 'div',
  className,
  children,
  ...props
}) {
  const classes = clsx(
    className,
    CssPrefix
  );

  return (
    <Component {...props} className={classes}>{children}</Component>
  );
}

export function Row ({
  children,
  percentage,
  barwidth = percentage,
  className,
  ...props
}) {
  var bar = (
    barwidth < 10
      ? <div><b style={{ width: `${barwidth}%` }} /><span>{percentage}%</span></div>
      : <div><b style={{ width: `${barwidth}%` }}><span>{percentage}%</span></b></div>
  );

  return (
    <>
      <strong>{children}</strong>
      {bar}
    </>
  );
}

BarGraph.Row = Row;
