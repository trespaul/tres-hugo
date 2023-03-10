# tres theme

A simple hugo theme using tailwindcss, that is also properly organised as a git submodule.

# Usage

Clone into a submodule as per usual, but use `npm --prefix themes/tres`.

# Structure

Page types

- default (admin pages, e.g., about & submit pages)
- article
- gallery, calendar


Article metadata

- title
- author
  - name
  - affiliation
  - link
- category: journal | zine
- keywords: []
- peer-reviewed: true | false
- date submitted, date published, date updated

# Todo

Use

```shell
grep -R "TODO" . --exclude-dir="node_modules" --exclude-dir="resources"
```

to list things that are to be done.

Other todos:

- manual dark mode switch?
- css customisation (Params.plugins.css?)
- taxonomies
  - sort out (links plurals …)
  - make generic
- article type post better layout for reading
  - font size
  - `<aside>` elements for side notes etc.
