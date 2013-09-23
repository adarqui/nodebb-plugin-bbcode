# NodeBB BBcode plugin

This is basically a rip of nodebb-plugin-markdown which serves as a good quick skeleton for writing nodebb plugins:

	https://npmjs.org/package/nodebb-plugin-markdown


This uses node-bbcode, with some small modifications. Supported bbcode:

[b]bold[/b]
[i]italic[/i]
[u]underlined[/u]
[s]strike-through[/s]
[samp]sample[/samp]
[color=red]red[/color]
[color=#FF0000]red[/color]
[size=1.2]1.2em[/size]
[url]http://blogs.stonesteps.ca/showpost.asp?pid=33[/url]
[url=http://blogs.stonesteps.ca/showpost.asp?pid=33][b]BBCode[/b] Parser[/url]
[url="http://blogs.stonesteps.ca/showpost.asp?pid=33"][b]BBCode[/b] Parser[/url]
[q=http://blogs.stonesteps.ca/showpost.asp?pid=33]inline quote[/q]
[q]inline quote[/q]
[blockquote=http://blogs.stonesteps.ca/showpost.asp?pid=33]block quote[/blockquote]
[blockquote]block quote[/blockquote]
[pre]formatted
    text[/pre]
[code]if(a == b)
  print("done");[/code]
text containing [noparse] [brackets][/noparse]
[hr][/hr]
[youtube]url[/youtube]
[youtube=url][/youtube]
