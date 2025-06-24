# koad-dot-sh

this source code is what makes up the site at [koad.sh](https://koad.sh).

![screenshot](/screen-shot.png?raw=true "Title")


## what?

This website can be thought of as my master social profile, resume and portfolio.

originally I cloned [Cveinnt's LiveTerm](https://github.com/Cveinnt/LiveTerm) and thought it was awesome, which it is.  But I don't like to over-complicate simple apps with skill-expensive frameworks so when the great rogers outage of 2022 happened and I had no access to blockchains (which is what I normally work on) I decided to port this into a [meteorjs](https://www.meteor.com/) app so it fits better into world of wonders.

### cheers.

I post this code on github because I need examples to show people how to use [github://koad/io/](https://github.com/koad/io/).


---

## devops using koad:io

### start local

grab a local copy, and throw it in your koad:io entity's 'sites' directory as a folder named as the site you want to host.

```bash
git clone https://github.com/koad/koad-dot-sh.git ~/.astro/sites/koad.sh

```


start a local copy for development purposes with live-reload with isolated mongodb in `.local` folder

```bash
astro start site koad.sh
```

or, is same as
```bash
cd ~/.astro/sites/koad.sh
astro start
```

### connect to shell
to the locally running runtime environment
```bash
astro shell
```

### build and upload to server
production package to production host
```bash
astro build site koad.sh
astro upload site koad.sh
```

### deploy package sent to server
deployment skeleton to production server
```bash
astro deploy site koad.sh
```

### start production
tell the server to start the process
```bash
astro start koad.sh
```

### restart production
tell the server to restart the process
```bash
astro restart koad.sh
```

### stop production
tell the server to restart the process
```bash
astro restart koad.sh
```


---

## reference:

astro is my personal digital assistant I spawned using [koad:io](https://github.com/koad/io/).
- [github://koad/io/](https://github.com/koad/io/)
- [book://koad-io/entity](https://book.koad.sh/reference/koad-io/entity/?h=koad+io#what)


build using the gifts from the following...

- [meteorjs](https://www.meteor.com/)
- [Cveinnt's LiveTerm](https://github.com/Cveinnt/LiveTerm)
- which is based on [M4TT72's awesome Terminal](https://github.com/m4tt72/terminal)
- [open source software](https://linuxfoundation.org/)
