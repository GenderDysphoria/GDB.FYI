
# Contributing to the GDB

The Gender Dysphoria Bible is a constant work in progress. As the understanding of gender and gender dysphoria develops, this site is constantly in need of further improvement. This site code and the page contents are available open source via the GitHub social programming site. The content of the site is licensed Creative Commons Non-Commercial Attribution ShareAlike, which means that its text cannot be reproduced for commercial purposes, must be credited back to this site if it is redistributed, and if a distribution alters the text, then it must also be released under the same license.

99% of the content on this site was written by the site maintainer. The site is a labor of love, and honestly there are sometimes weeks or months between updates because I just don't always have the [spoons](https://en.wikipedia.org/wiki/Spoon_theory) to work on it.

## Ways You Can Help

- **Contributing new essay content.** There are so many topics related to the trans experience which are not yet documented on this site. [A project board of planned updates](https://github.com/orgs/GenderDysphoria/projects/2) and wanted content extensions is maintained on the GDB's GitHub organization page.

- **Translating to other languages.** New translations are absolutely always welcomed, and existing translations are constantly in need of updates to keep them matching the english text.

- **Copy editing / correction**. Typos and bad sentences make it past me constantly, so spotting them and letting 

- **Programming Code**. If you are of a coding nature, there are features I would love to implement on this site which I have yet to get around to. See the project board linked above. Instructions on how to get the site up and running are in the README file on the git repository.

## How to Contribute Content

The best way to add completely new content to the site is to reach out to me directly via social media, by email, or through opening an issue on the Github repository.

- [GitHub Repository](https://github.com/GenderDysphoria/GDB.FYI)
- Email Address: [gdb@curvyandtrans.com](mailto:gdb@curvyandtrans.com)
- [Patreon](https://patreon.com/curvyandtrans)
- Mastodon / Fediverse: [@twipped@twipped.social](https://twipped.social/@twipped)

Please **do not submit AI generated content**, this is a human made project.

## How to Contribute a Translation

Every language in the GDB is organized under it's own two character [localization code](https://en.wikipedia.org/wiki/Language_localisation#Language_tags_and_codes) (just the first two, please, no regional dialects). You first step should be to look up the code for the language you wish to translate into.

Download [this zip file](/gdb.zip) to fetch a recent copy of the english text. This file extracts into all the raw data that is used to construct the english version of the GDB site content. Alternatively, if you are working directly in the GitHub repository, you can just duplicate the `public/en` folder and give it the new language code.

The files ending in `.mdx` are [Markdown formatted](https://www.markdownguide.org/) text files, and can be opened in any raw text editor. At the top of each file is a block of metadata that tells the website important things about the file. The fields that need translating are `title`, `linkTitle` (the shortened name used in the menu), and `description`. Do not change any of the text to the left of the colon characters, as that is needed for the site.

Intermixed with the text will be blocks of code which look similar to HTML containing lots of &lt; and &gt; characters. Sometimes this *is* HTML, but most of these are page components that influence the rendering of the page. Any text which looks like prose is in need of translation. If you are a software developer who has worked with React, this will be familiar, these are JSX components, but this isn't actually React code.

Images inside the `images` folder only need to be present if your translation alters them. If you do alter them, the path to those images will need to be updated in your translation by changing the two character language code. For example, `"/en/images/hbscale.gif"` would become `"/xx/images/hbscale.gif"` if `xx` is your language code. If you have not changed the image, please just keep it pointing at the `en` version to save space.

**Important Files:**

- `_disclaimer.mdx` is a component which is rendered at the top of each page containing the link to this contribution guide.

- `_index.js` is a JavaScript file containing the sort order for all of the pages as they appear in the navigation menu, the translation strings for the site header & footer, and the definitions for the built in glossary.

  Any term you wish to add to the glossary is fine. The key that the entry is recorded under (eg, `amab`) defines what text is highlighted as having a definition (capitalization is irrelvant). Each definition supports a `title`, `description`, and `aliases` field. If no title is defined, it uses the search key. Descriptions can be a list of text entries, and each one will be displayed as a paragraph on the popup.

- `fulltext.js` directs the engine on what files to include in the View All link at the top of the drop down menu. This should be updated if you change any file names.

- `index.mdx` is the first page of the book and must remain named `index.mdx`, all other `mdx` files (except the disclaimer) can be changed to language appropriate names, but you must update those names in `fulltext.js` and `_index.js` as well.

When you are done translating all of this text, reach out to me via the above methods. If you are familiar with GitHub, the fastest way to get this contributed is to open a pull request. Place your new language folder into the `public` directory.

If you do not know how to use GitHub, just compress all the files into a zip and send it to me, I can take care of releasing it.

## How Can I Help You Financially?

One time donations to the project can be made [using Ko-Fi](https://ko-fi.com/curvyandtrans), or via [Venmo](https://venmo.com/code?user_id=2654767276883968966).

If you would like to support this site continually, I there is also [a Patreon](https://patreon.com/curvyandtrans).

Either way, your support is extremely appreciated.
