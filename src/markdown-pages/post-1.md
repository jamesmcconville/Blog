---
path: "/blog/Building-this-blog"
date: "2020-01-31"
title: "Building the blog"
---

After many years of telling myself I'd get around to writing and publishing a blog, I've finally managed it... complacency, of course, is the death 
of many things so I'm aware the real trick is to keep at it! 

For my first post I decided that I'd write about getting this very blog off the ground.

Requirements for the blog...
* Posts written in markdown
* No dependency on windows (I'm a .net dev by trade and would like to avoid IIS)
* No Database (or no database server at least)
* Straightforward deployment

Without boring you with a long analysis, I'll get straight to the point.. I opted to use gatsby and host on netlify.

#### Gatsby
 For the uninitiated, Gatsby is a "framework" (for want of a better term) that uses GraphQL to serve static content from a variety of possible soureces and then uses react on 
 the front end to display it. A more detailed and frankly better explanation can be found [here](https://www.mediacurrent.com/what-is-gatsby.js). Gatsby then, covers 3 out of my 4 requirements. 

 #### Netlify
 