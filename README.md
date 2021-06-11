# Test Jussi
This project was created with the create-react-app, a boilerplate from Facebook React cli.

## 1 - Prepare your machine 
Have a version of Node.js installed on your computer >= v11.11.0 
You can install here: https://nodejs.org/en/

Have Yarn installed
You can install here: https://yarnpkg.com/

## 2 - Understanding the project
This project is based on ReactJs and therefore its structure uses the concept of components, its styling is done through the Sass post-processor, which allows you to use other functions in addition to what Css normally allows, for the requests we are using Axios which is a library based on promises and this project use react-slick for slides.


## 3 - Putting to work
Enter the project folder and run the command 
`yarn install`

After all the libraries are installed, run the command
`yarn start`

The above command will build the project files and create the local react server, it will also build the Sass files.

## About styled-components
This project uses styled-components as the principal method for stylization, to use it you can create a .js file in your component folder and call it the `styled` file inside the your component folder together `index.js`

for the initialize in `styled.js` make `import styled from "styled-components";`

`import styled from "./styled";` in index.js`

- Styled-components allows you to nest stylizations on js
- Styled-components is css on js

See more about here: https://styled-components.com/

## About Axios 
Axios is an HTTP client based on Promises to make requests, it can be used both in the browser and in the NodeJs.

See more about here: https://github.com/axios/axios

## The Api Used
See more about here: https://documenter.getpostman.com/view/1811817/Szzj8yAq?version=latest

## About React-slick
React-slick is a lib for slides carousel

See More about here: https://react-slick.neostack.com/