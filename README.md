# vinyl-data-uri

Turn data URIs into vinyl.

![build status](http://img.shields.io/travis/izaakschroeder/vinyl-data-uri/master.svg?style=flat)
![coverage](http://img.shields.io/coveralls/izaakschroeder/vinyl-data-uri/master.svg?style=flat)
![license](http://img.shields.io/npm/l/vinyl-data-uri.svg?style=flat)
![version](http://img.shields.io/npm/v/vinyl-data-uri.svg?style=flat)
![downloads](http://img.shields.io/npm/dm/vinyl-data-uri.svg?style=flat)

```javascript
var data = require('vinyl-data-uri'),
	fs = require('vinyl-fs');

data.src('data:image/png;base64,...')
	.pipe(fs.dest('./'));
```
