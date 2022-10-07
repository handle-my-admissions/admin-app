![Handle My Admission](https://raw.githubusercontent.com/handle-my-admissions/.github/main/admin-app.gif)

<p align="center">
<img src="https://img.shields.io/github/license/handle-my-admissions/admin-app" />
<img src="https://img.shields.io/badge/Author-Tejas_Ladhani-yellow" />
</p>

<hr/>

## 🎊 admin-app
admin-app is an application that severs "admin" users of Handle My Admission.

visit portal : [admin-app](https://handle-my-admissions-admin.web.app/ap-admin)
## 💥 Introduction to Handle My Admission

Handle My Admission is a solution which provides an end-to-end platform for institutions to manage their admission process , as well as it acts as an on-stop solution for high school students to manage their college applications.

It started with the idea to provide facilities to only one university, but now it’s pivoting towards SAAS.


## 💡 Why did we build this?

The very first reason was to reduce the costs of the solutions that our university was using. Later, we realized that there is no single SAAS platform for admission, where universities can post their openings and applicants can apply through a single platform, because each university currently has their own portal, making it difficult to track your application as a student when applying to many universities and openings.

## 🥁 Features

- Dynamic dashboards.
- Query management system.
- Application management system.
- Up-to-date notifications.
- Notice boards.
- Embedded calendars.
- Different payment modes powered by Razorpay.

## 🛠️ Local development

That's pretty easy. To ensure that you are able to install everything properly, we would recommend you to have <b>Git</b>, <b>Node</b> and <b>npm or yarn</b> installed.

We will first start with setting up the Local Project Environment:

```sh
git clone https://github.com/handle-my-admissions/admin-app.git
```

```sh
cd admin-app
```
Install all the dependencies. 
```sh
npm install
```
To run the React app locally | start the development server:
```
npm start
```
To Build the production ready web application:

```sh
npm run build
```

You need to have the ```UserPoolId``` and ```client id```. Go to AWS > Cognito > Manage pools and users > clients or else contact any of the maintainers.Once you have it, Save that into ```/src/UserPool.js```:

```js
const poolData = {
  UserPoolId: 'POOL_ID_XXXXXX',
  ClientId: 'CLIENT_ID_XXXXX',
};
``` 

📃 NOTE:

1. You must follow the eslint rules defined in the ```.eslintrc.json``` when creating a pull request. Please ensure that EsLint is up and running before submitting your code for linting. We recommend using an extension to assist you in adhering to lint rules.

Learn more about [Eslint](https://eslint.org/)

2. For a smooth installation, Node version ```16.x``` is required.

Running on some other Node version ? we recommend you to check out this amazing tool : [NVM](https://github.com/nvm-sh/nvm)

## 🧰 Tools & technologies used ?
There are plentty of them 🎊,
- ReactJS
- Ant-Design
- Amazon Web Services:
    * Lambda
    * DynamoDB
    * Cognito
    * API Gateway
    * S3
    * SNS
    * SQS

## Please help me getting started with repository's structure! 🙄

This React app has three types of components: ```component```, which can be defined as the smallest reusable components being utilized or used by the other two types, ```container```, which utilizes the first type of components, and ```page``` components, are nothing but views.

some details about directory structure:

Inside /src:
1. **components**, **containers** and **pages** directories contains components whose sole purpose is to serve UI.

2. **Contexts** directory contains the contexts used by the application's various components. Utilizing contexts solves the problem of prop drilling.

3. **Routes** directory contains ```ProtectedRoute.js``` which protects the required components from unauthenticated users, preventing them from accessing those components.

4. **Helper** directory have ```charts``` and other utilities.


<hr />
<details>
  <summary> 📃 Detailed + High level architecture</summary>
    <p align="center">
        <img src="https://user-images.githubusercontent.com/67834407/153741053-0c85a994-dcfe-49a7-83e7-769d89d59b19.png " />
    </p>
    <p align="center">
        <img src="https://user-images.githubusercontent.com/67834407/153741062-9bab87c1-a605-4a8a-80ac-760111d0a11a.png" />
    </p>

</details>

<hr/>

<details>
  <summary> 📃 Flow chart </summary>
    <p align="center">
        <img src="https://user-images.githubusercontent.com/59203865/153623874-c63fd684-c51f-41e7-9e6d-f4a4acaa7345.png" />
    </p>
    <p align="center">
        <img src="https://user-images.githubusercontent.com/59203865/153624641-802bda4f-27b0-4cfe-80fd-ff1cb7f197f6.png" />
    </p>

</details>


## ✌ Code Of Conduct
We like to follow a code of conduct and expect the same from you. please refer: [CODE OF CONDUCT](/Code%20of%20Conduct.md)

## 📜 LICENSE

[MIT License](/LICENSE.txt)
