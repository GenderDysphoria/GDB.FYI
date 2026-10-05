import clsx from 'clsx';

import SvgIcon from '#src/components/SvgIcon';

function getAnchor (text) {
  if (typeof text !== 'string') return null;
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/[ ]/g, '-');
}

const CssPrefix = 'ui-header';

function createHeading (BaseComponent, name = BaseComponent.toUpperCase()) {
  const Heading = ({
    component: Component = BaseComponent,
    className,
    ...props
  }) => {
    const anchor = getAnchor(props.children);
    const link = `#${anchor}`;

    const classes = clsx(
      className,
      CssPrefix
    );

    return (
      <Component id={anchor} className={classes}>
        <span className="header-text">{props.children}</span>
        <a href={link} className="header-link" aria-label="Deep Link">
          <SvgIcon icon="paragraph" aria-hidden="true" />
        </a>
      </Component>
    );
  };
  Heading.displayName = name;
  return Heading;
}

export const H1 = createHeading('h1', 'H1');
export const H2 = createHeading('h2', 'H2');
export const H3 = createHeading('h3', 'H3');
export const H4 = createHeading('h4', 'H4');
export const H5 = createHeading('h5', 'H5');
export const H6 = createHeading('h6', 'H6');
export const headingComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
};
