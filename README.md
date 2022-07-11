Source files for my Polytechnic Early Admissions Exercise (EAE) that I host using GitHub
Pages. Check it out here: <https://markjoshwel.github.io/portfolio>.

- [Shorthands](#shorthands)
- [Developing](#developing)
- [Building](#building)
- [Publishing](#publishing)
- [Licence](#licence)
- [Third Party Open Source Licenses](#third-party-open-source-licences)

## Shorthands

These are shorthand commands for [building](#building) and/or [publishing](#publishing).

```shell
npm run all          # runs all build:* and post:* scripts
npm run all+publish  # same as 'all', but also 'npm run publish'
```

## Developing

Changes to the sites' source code occurs in the `src/` folder, where website previews
come from `public/index.html`.

During development, you can run the following command to get real-time updates from
Tailwind.

```shell
npm run dev:watch-html
npm run dev:watch-css
```

If you get a error regarding the `$SHELL` variable when running `dev:watch-html`, you can
specify a shell by prefixing `SHELL=/bin/bash` (or whatever shell you use) to the
command.

The non-watch variants of these commands are:

```shell
npm run post:html
npm run post:css
```

**Run these commands in the root of the repository.**

## Building

```shell
npm run build  # build css using tailwind
npm run post  # clean css using postcss+cssnano and html using html-minifier-terser
```

**Run these commands in the root of the repository.**

## Publishing

As the target deployment platform is GitHub pages, the following command will push the
contents of the `public/` directory to a `gh-pages` branch.

```shell
npm run publish  # shorthand for 'npx gh-pages -t -d public'
```

**Run the command in the root of the repository.**

## Licence

This website and its' content is free and unencumbered software released into the public
domain. See <https://unlicense.org/> or the [UNLICENSE](UNLICENSE) file for more
information.

However, some files are copyrighted and do not fall under the coverage of The Unlicense,
and are listed [below](#third-party-open-source-licences).

### Third Party Open Source Licences

#### MIT License

1. **Tabler Icons - arrow-down Icon (Modified)**

    The SVG file has been modified to use a `white` stroke rather than `currentColor`.

    Repository: <https://github.com/tabler/tabler-icons>

    File Location: `/public/assets/thirdparty/arrow-down.svg`

    ```text
    MIT License

    Copyright (c) 2020-2022 Paweł Kuna

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    ```

#### Open Font License 1.1

1. **Public Sans**

    Repository: <https://github.com/uswds/public-sans>

    File Locations: `/public/assets/thirdparty/PublicSans-*`

    ```text
    Copyright 2015 The Public Sans Project Authors (https://github.com/uswds/public-sans)

    This Font Software is licensed under the SIL Open Font License, Version 1.1.
    This license is copied below, and is also available with a FAQ at:
    https://scripts.sil.org/OFL


    -----------------------------------------------------------
    SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
    -----------------------------------------------------------

    PREAMBLE
    The goals of the Open Font License (OFL) are to stimulate worldwide
    development of collaborative font projects, to support the font creation
    efforts of academic and linguistic communities, and to provide a free and
    open framework in which fonts may be shared and improved in partnership
    with others.

    The OFL allows the licensed fonts to be used, studied, modified and
    redistributed freely as long as they are not sold by themselves. The
    fonts, including any derivative works, can be bundled, embedded,
    redistributed and/or sold with any software provided that any reserved
    names are not used by derivative works. The fonts and derivatives,
    however, cannot be released under any other type of license. The
    requirement for fonts to remain under this license does not apply
    to any document created using the fonts or their derivatives.

    DEFINITIONS
    "Font Software" refers to the set of files released by the Copyright
    Holder(s) under this license and clearly marked as such. This may
    include source files, build scripts and documentation.

    "Reserved Font Name" refers to any names specified as such after the
    copyright statement(s).

    "Original Version" refers to the collection of Font Software components as
    distributed by the Copyright Holder(s).

    "Modified Version" refers to any derivative made by adding to, deleting,
    or substituting -- in part or in whole -- any of the components of the
    Original Version, by changing formats or by porting the Font Software to a
    new environment.

    "Author" refers to any designer, engineer, programmer, technical
    writer or other person who contributed to the Font Software.

    PERMISSION & CONDITIONS
    Permission is hereby granted, free of charge, to any person obtaining
    a copy of the Font Software, to use, study, copy, merge, embed, modify,
    redistribute, and sell modified and unmodified copies of the Font
    Software, subject to the following conditions:

    1) Neither the Font Software nor any of its individual components,
    in Original or Modified Versions, may be sold by itself.

    2) Original or Modified Versions of the Font Software may be bundled,
    redistributed and/or sold with any software, provided that each copy
    contains the above copyright notice and this license. These can be
    included either as stand-alone text files, human-readable headers or
    in the appropriate machine-readable metadata fields within text or
    binary files as long as those fields can be easily viewed by the user.

    3) No Modified Version of the Font Software may use the Reserved Font
    Name(s) unless explicit written permission is granted by the corresponding
    Copyright Holder. This restriction only applies to the primary font name as
    presented to the users.

    4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
    Software shall not be used to promote, endorse or advertise any
    Modified Version, except to acknowledge the contribution(s) of the
    Copyright Holder(s) and the Author(s) or with their explicit written
    permission.

    5) The Font Software, modified or unmodified, in part or in whole,
    must be distributed entirely under this license, and must not be
    distributed under any other license. The requirement for fonts to
    remain under this license does not apply to any document created
    using the Font Software.

    TERMINATION
    This license becomes null and void if any of the above conditions are
    not met.

    DISCLAIMER
    THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
    OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
    COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
    DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
    OTHER DEALINGS IN THE FONT SOFTWARE.
    ```
