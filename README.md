
# Codebase for the [Gender Dysphoria Bible](https://gdb.fyi).

Code for this site is distributed as MIT licensed.

Site content such as essays and photo materials are copyright Jocelyn Badgley & other contributors, and are licensed Creative Commons, Attribution-NonCommercial-ShareAlike (see [LICENSE.txt](LICENSE.txt)).

## How to use this repository

The GDB is a static content site generated using a custom built framework written in Node.js. The majority of the code that drives the build process sits in the `generator` directory. This code is activated via `npm` scripts. The following commands are available.

- `npm run build` - Builds most of the site content in developer mode.

- `npm run build-pdfs` - Builds the site and launches a headless browser which is used to generate a PDF for each of the translations. These PDFs are then saved in their respective language folders.

- `npm run build` - Builds most of the site content in production mode as it will live on the server. This adds several minification and optimization steps that aren't needed in development.

- `npm start` - Builds most of the site content in developer mode and launches a local server to host it. Changes to `js` and `mdx` files will trigger a rebuild of the content. Does not build PDFs.

- `npm run deploy` - Builds the entire site, including PDFs, in production mode for use on the live website, uploads those files to AWS, and initiates a CloudFront invalidation to take them live. This cannot be used without the correct AWS credentials.

You do not need to be able to execute the generation code in order to contribute content. All site content is stored in the `public` folder. Changes to this content can be done by anyone who is experienced with Markdown, JSX, and git source control.

### Site Content

Page content is in [markdown](https://www.markdownguide.org/getting-started/) format, extended with MDX to enable the use of JSX components. Components are rendered using the [`essex`](https://www.npmjs.com/package/essex) templating engine.

The beginning of each markdown file contains a [YAML](https://yaml.org/) formatted header block with metadata relevant to that file. The keywords at the start of each line are significant to the page generation process.

- `date`: This defines the creation date of the page and should never be changed unless a new page is created.
- `description`: This is the description of the page that appears when linked on social media.
- `title`: This is the title of the page as it appears in the browser titlebar and when embedded on social media.
- `lang`: The two character language code for the page. Defaults to `en` if omitted.
- `linkTitle`: This is the shortened title of the page as it appears in the navigation menu and on pagination buttons.
- `rtl`: If a language is to be rendered Right-To-Left, this should be present and set to true.
- `url`: Overrides the public URL that the page will be rendered at.

All page components are stored in the `src/components` directory. Essex components work similar to React components, except they do not maintain any form of state for rerendering, and they can be `async` functions to perform asyncronous IO operations.

**Site Styling**

CSS styling for this site is managed in two locations -- the base styles are in `src/css` and are grouped by domain purpose. Individual component styles are stored alongside their component JS code, eg `src/components/Card/Card.css`. All css files are concatinated into a single file and then processed through `PostCSS` to apply a number of transformations and mixins. See `generator/tasks/css.js` for the PostCSS plugins available.

Every component's styles are namespaced with a `.ui-*` css class.

## Attributions

Sun/moon svg icons forked from [glow-ui/glow-icons](https://github.com/glow-ui/glow-icons). Licensed under the [MIT license](https://github.com/glow-ui/glow-icons/blob/main/LICENSE).
