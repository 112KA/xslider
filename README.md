![Logo of the project](./images/logo.sample.png)

# XSlider &middot; [![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)
> Additional information or tag line

XSlider is a slider library using webgl shader for transition.

[demo](https://112ka.github.io/)

- Shader transition is easy to customize.
- Treat DOM structure as webgl texture.

## Installing / Getting started

Download and install:
```shell
yarn install xslider
```
or
```shell
npm install xslider
```

Include CSS and JS files:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    ...
    <link rel="stylesheet" href="path/to/xslider.min.css">
</head>
<body>
    ...
    <script src="path/to/three.min.js"></script>
    <script src="path/to/xslider.min.js"></script>
</body>
</html>
```
Includes three.js. Xslider depends on it.
(In the near future, I plan to make it independent.)

### Usage
A minimum sample is [Here](https://112ka.github.io/).

html
```html
<div class="xslider">
    <div class="xslider-view">
        <div class="xslider-slide">
            <div class="xslider-layer-texture">Elements as texture</div>
            <div class="xslider-layer-ui">Elements as DOM</div>
        </div>
        <div class="xslider-slide"></div>
        ...
    </div>
    <div class="xslider-pager"></div>
</div>
```

css
```css
.xslider {
    width: 400px; height: 300px;
}
```

js
```js
new XSlider(".xslider");
```


## Browser Supports
- SVG <foreignObject> tag


<!--
### Prerequisites
What is needed to set up the dev environment. For instance, global dependencies or any other tools. include download links.

### Setting up Dev

Here's a brief intro about what a developer must do in order to start developing
the project further:

```shell
git clone https://github.com/your/your-project.git
cd your-project/
packagemanager install
```

And state what happens step-by-step. If there is any virtual environment, local server or database feeder needed, explain here.

### Building

If your project needs some additional steps for the developer to build the
project after some code changes, state them here. for example:

```shell
./configure
make
make install
```

Here again you should state what actually happens when the code above gets
executed.

### Deploying / Publishing
give instructions on how to build and release a new version
In case there's some step you have to take that publishes this project to a
server, this is the right time to state it.

```shell
packagemanager deploy your-project -s server.com -u username -p password
```

And again you'd need to tell what the previous code actually does.

## Versioning

We can maybe use [SemVer](http://semver.org/) for versioning. For the versions available, see the [link to tags on this repository](/tags).


## Configuration

Here you should write what are all of the configurations a user can enter when
using the project.

## Tests

Describe and show how to run the tests with code examples.
Explain what these tests test and why.

```shell
Give an example
```

## Style guide

Explain your code style and show how to check it.

## Api Reference

If the api is external, link to api documentation. If not describe your api including authentication methods as well as explaining all the endpoints with their required parameters.


## Database

Explaining what database (and version) has been used. Provide download links.
Documents your database design and schemas, relations etc... 
-->

## Licensing

MIT