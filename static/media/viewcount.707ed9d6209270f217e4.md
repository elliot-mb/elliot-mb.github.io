## A view counter for my blog pages 
I am in the process of implementing a view counter for my blog pages, which will show how many unique users are reading my blog pages. Don't worry, I'm managing my expectations. 

This will be completed in the following way: 
- clients maintain a unique token, stored in localstorage, to identify their view exactly once
- a Golang server runs a simple server that maps page titles to view counts
- the view count for a page is incremented whenever a new ID is registered to have clicked a blog page

## Golang server
Currently my server runs on my Raspberry Pi 1B (if you've got a calculator lying around you may be able to successfully perform a DoS attack on it).

At the moment you can POST to it in order to increment labeled counters, and GET the value of labeled counters. It persists storage by writing to a plain text file and JSON.marshal-ing it on starting the server. This is not by any means efficient, but it's such a small scale applications I personally am not at all bothered; given I don't run into performance issues. 

A 700Mhz Arm CPU standing proud on 512MB of RAM can only get you so far in this day and age...

## A 'problem' of the Browser

The main issue I'm facing right now is that, well, there is no issue... at least when I run my website in developer mode, locally. Viewcounts are currently being _correctly_ requested and displayed by the locally hosted development build of my website, however when I am using my blog page on the deployed version; I get an error. 

One cannot fetch HTTP (unencrypted/insecure) requests inside an HTTPS domain, it seems. I will correct this using **CertBot** of the tools the contributors of [LetsEncrypt](https://letsencrypt.org/) put together; including their free TLS certification system. 

Hereafter I will begin working out how to turn my little Go webserver into a grown up little webserver serving over port 443, but until then all viewcounts on my website will display ``-1``, so apologies for that.