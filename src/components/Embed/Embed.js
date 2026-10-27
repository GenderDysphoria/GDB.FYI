import clsx from 'clsx';

import { computeSrc } from '#src/components/Image/images';
import Paper from '#src/components/Paper';
import Stack from '#src/components/Stack';
import Text from '#src/components/Text';

const CssPrefix = 'ui-embed';
export default async function Embed ({
  component,
  className,
  origin,
  title,
  description,
  thumbnail,
  ...props
}) {
  const classes = clsx(
    className,
    CssPrefix
  );

  const [ files, promises ] = await computeSrc(thumbnail);
  await Promise.all(promises);
  const media = files.at(-1);

  return (
    <Paper component={component} {...props} className={classes}>
      <div className="ui-embed-content">
        {origin && (
          <span
            className="ui-embed-origin"
          >
            {origin}
          </span>
        )}
        {title && (
          <span
            className="ui-embed-title"
          >
            {title}
          </span>
        )}
        {description && (
          <span
            className="ui-embed-description"
          >
            {description}
          </span>
        )}
      </div>
      {media && (
        <div
          className="ui-embed-media"
          style={{ backgroundImage: `url('${media.url}')` }}
        />
      )}
    </Paper>
  );
}
