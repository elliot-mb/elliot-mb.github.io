## Working Principle
Process raw Markdown files using the ``<ReactMarkdown>`` library. These are organised in a typescript file under ``/src/data`` in my website. 

This took me a few hours to get working properly, including .css (not final), but now I have the ability to add an unlimited number of richly-formatted pages just through editing ``blog_pages.ts`` and producing a markdown file for each one.

## Plans for the future
- Have a dropdown menu to sort blog posts by age/view count/relevance to a search queary.
- Have a view count hosted on my raspberry pi, perhaps as a really basic go server that just keeps track of a ticker value for each post.
- Make the Blog page look nicer in general.