# Server-Test

[![NPM](https://img.shields.io/npm/v/server-test.svg?style=flat-square)](https://www.npmjs.com/package/server-test)
[![Downloads](https://img.shields.io/npm/dm/server-test.svg?style=flat-square)](http://npm-stat.com/charts.html?package=server-test)
[![pledge](https://bredele.github.io/contributing-guide/community-pledge.svg)](https://github.com/bredele/contributing-guide/blob/master/community.md)

Create HTTP server and request for your unit tests.

## Usage

Here's an example using [tape](https://github.com/substack/tape)

```javascript
const server = require('server-test')
const test = require('tape')

test('should create a server and send POST request', assert => {
  server((req, res) => {
    assert.equal(req.method, 'POST')
  }, {
    method: 'POST',
    form: {
      foo: 'bar'
    }
  })
})
```
The second optional argument is the options you can pass to the module [request](https://github.com/request/request).

## Installation

```shell
npm install server-test --save
```

[![NPM](https://nodei.co/npm/server-test.png)](https://nodei.co/npm/server-test/)

## Question

For questions and feedback please use our [twitter account](https://twitter.com/bredeleca). For support, bug reports and or feature requests please make sure to read our
<a href="https://github.com/bredele/contributing-guide/blob/master/community.md" target="_blank">community guideline</a> and use the issue list of this repo and make sure it's not present yet in our reporting checklist.

## Contribution

Steroid is an open source project and would not exist without its community. If you want to participate please make sure to read our <a href="https://github.com/bredele/contributing-guide/blob/master/community.md" target="_blank">guideline</a> before making a pull request. If you have any server-test-related project, component or other let everyone know in our wiki.


## Licence

The MIT License (MIT)

Copyright (c) 2016 Olivier Wietrich

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
