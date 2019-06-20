# XSlider &middot; [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)

XSlider is a slider library using webgl shader for transition.

- Shader transition is easy to customize.
- No external dependency.
- Treat DOM structure as webgl texture.
- It switches continuously when several slides are skipped  
![slide sample](https://raw.githubusercontent.com/wiki/112KA/xslider/images/xslider_slide.gif)
- You can grab a slide and throw it  
![drag sample](https://raw.githubusercontent.com/wiki/112KA/xslider/images/xslider_drag.gif)

[demo](https://112ka.github.io/xslider/demo/)

## Installing / Getting started

### Download and install:
```shell
yarn add xslider
```
or
```shell
npm install xslider
```

### Include CSS and JS files:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    ...
    <link rel="stylesheet" href="path/to/xslider.min.css">
</head>
<body>
    ...
    <script src="path/to/xslider.min.js"></script>
</body>
</html>
```

## Usage
A minimum sample is [Here](https://112ka.github.io/xslider/samples/base/).

### html
```html
<div class="xslider">
    <div class="xslider-view">
        <div class="xslider-slide">
            <div class="xslider-layer-gl">Elements as texture</div>
            <div class="xslider-layer-ui">Elements as DOM</div>
        </div>
        <div class="xslider-slide"></div>
        ...
    </div>
    <div class="xslider-pager"></div>
</div>
```

### css
```css
.xslider {
    width: 400px; height: 300px;
}
```

### js
```js
new XSlider(".xslider");
```


## API
### new XSlider(selector, options) or setup(selector, options)

```js
/**
 * @constructor
 * @param {string} selector - CSS Selector
 * @param {Object} options - XSlider options. See below.
 */

new XSlider(selector, options);
```

#### options
| Name | Type | Default | Description |
| - | - | - | - |
| transition | Object | Xslider.BaseTransition | Transition effect. |
| easing | Number | 0.15 | Easing coefficient of transition. <br>Adjust the transition time with this parameter. |
| initialSlideIndex | Number | 0 | Index number of initial slide. |
| loop | Boolean | true | Loop slide flag. |
| touchMove | Boolean or Object | { <br>    throwable:true <br>} | Object with touch parameters.  |
| autoplay | Boolean or Object | false | Object with autoplay parameters.<br> { <br>delay:3000 <br> } |

## Browser Supports
| Chrome | IE | Edge | Firefox | Safari |
| :-: | :-: | :-: | :-: | :-: |
| Yes | - | - | Yes | Yes |
- IE11 and below do not support SVG &lt;foreignObject&gt; tag.
- In Microsoft Edge, the background image of &lt;foreignObject&gt; tag can not be drawn on canvas.<br>https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/17408255/

| Android | iOS |
| :-: | :-: |
| 5+ | 8+ |

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