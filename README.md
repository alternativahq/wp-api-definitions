<p align="center">
  <a href="https://wodo.io/" target="blank"><img src="https://github.com/wodo-platform/wodo-branding/blob/main/src/img/branding/logo_purple.png" width="320" alt="Wodo Platform" /></a>
</p>

<div align="center">
<h2> Wodo Platform API Definitions </h2>
</div>

<div align="center">
  <h4>
    <a href="#">
      Website
    </a>
    <span> | </span>
    <a href="#">
      Product Docs
    </a>
    <span> | </span>
    <a href="#">
      Architecture Docs
    </a>
    <span> | </span>
    <!-- <a href="#"> -->
    <!--   CLI -->
    <!-- </a> -->
    <!-- <span> | </span> -->
    <a href="#/CONTRIBUTING.md">
      Contributing
    </a>
    <span> | </span>
    <a href="#">
      Reddit
    </a>
    <span> | </span>
    <a href="#">
      Twitter
    </a>
  </h4>
</div>


<br/>



- [Overview](#overview)
- [API Driven Design](#api-driven-design)
- [Async API Definitions](#async-api-definitions)
  - [Document Generations](#document-generations)
  - [Code Generation](#code-generation)
  - [Model Generation](#model-generation)
  - [Message Validation](#message-validation)
- [Sync API Definitions](#sync-api-definitions)
- [Build](#build)
- [Github Actions](#github-actions)
- [Publish API Definitions as NPM Package Locally](#publish-api-definitions-as-npm-package-locally)

[Live Demo](http://65.108.95.8:3003/)

## Overview

Wodo Api Definitions module include system wide APIs, transports and schema definitions that are starting point while features are designed and developed.

## API Driven Design

If you do not work on important problem, it is unlikely you'will do important work. Richard Hamming.

We all talk about APIs in the software world all the time. If we need to define an API in the simplest form, the definition would be "An API is characteristic of the way how two pieces of software can communicate over a transport in a fast, secure, easily programable way". If there are missing API features and incomplete API definitions, a software system becomes hard to integrate and change. Here in the wodo netowrk, we design APIs to solve these two important problems by relying on API definition fundamentals.

We follow the following proven principles to design our APIs

* What developers really want from your API
* How to make your API stand out from the crowd
* Strategies for driving broad developer adoption
* A fool-proof way to design for great user experience

## Async API Definitions

Async API definitions are built upon <a href="https://www.asyncapi.com/"> the asyncapi initative </a> framework. AsyncAPI is an open source initiative that seeks to improve the current state of Event-Driven Architectures (EDA). It provides open source tools to easily build and maintain wodo event-driven architecture that goes from documentation to code generation, from discovery to event management. All tools are powered by the AsyncAPI specification, the industry standard for defining asynchronous APIs.


The first to create a specification that allows developers, architects, and product managers is to define the interfaces of an async API. Much like OpenAPI (fka Swagger) does for REST APIs. Each microservice follow a folder structure and describes asyncapi.yml file such as

```
wp-api-definitions
    /src
        /service
            /wp-iam-service
                /async
                    asyncapi.yml
                    /components
                      parameters.yaml
                      /messages
                        TenantCreated.yaml
                        ..
                      /schemas
                        wp-iam-service-async-schema.yaml
                        ..

```


> To implement async api definition json or yml and see generated html live, please go to <a href="https://playground.asyncapi.io/?load=https://raw.githubusercontent.com/asyncapi/asyncapi/v2.2.0/examples/simple.yml">the playground website </a> of the asyncapi community

### Document Generations

ag asyncapi.yml @asyncapi/html-template -o ../../../../dist/output -p singleFile=true

### Code Generation

ag asyncapi.yml @asyncapi/nodejs-ws-template -o output -p server=production


### Model Generation

https://www.asyncapi.com/tools/modelina

### Message Validation

https://github.com/WaleedAshraf/asyncapi-validator

## Sync API Definitions

The REST Api is genereted by the swagger. To add a new REST API, please follow the stesp below:

* Add your controller REST API class, methods and relevant dto class under src/api folder. NestJS framework handles swagger REST API doc generation.
* Add your new controller class to `controllers` list in app.module.ts file.
* Run npm start to see the generated docs at http://localhost:3003/docs/

## Build

Run the following command to build the project, generate docs and run it in production mode.

* Run `npm run build` . This will generated asynch event APIs docs and synch API docs.If you notice any errors in the console, you can ignore them as long as the build succeeds with a `done` message.
* Run `npm run start:prod` . This will start the project in the prodiction mode. You can reach all docs at http://localhost:3003/

## Github Actions

https://www.asyncapi.com/tools/github-actions

## Publish API Definitions as NPM Package Locally

You may need to publish npm packages from your local dev env in order to speed up development process. It is sort of workaround and you should do clean-up your published package versions. Official github actions will take care of package publishing eventually.

Please follow the steps below to publish wp-api-definitions npm package from your local development environment.

```bash
npm login --scope=@wodo-platform --registry=https://npm.pkg.github.com
```

in your terminal and you’ll be prompted to provide the following. Enter your github username, access token and wodo-platform email:

```bash
Username: YOUR_GITHUB_USERNAME
Password: YOUR_GITHUB_TOKEN
Email (this IS public): wodo-platform@users.noreply.github.com
```

Once you log in successfully, you will see the messafe below:

```bash
Logged in as your_git_user to scope @wodo-platform on https://npm.pkg.github.com/.
```
Publish the package:

```bash
npm publish
```

Verif that wp-api-definitions package has been published successfully with the correct version you provided in package.json file. Go to the page below and make sure that your packge is listed on the  published artifact list

```
https://github.com/orgs/wodo-platform/packages
```

> You should increase version number when you need to re-publish a new package version.

Once the package is published, you can add it to the dependencies list in package.json file. In order to retrieve the dependency, you must run **"npm login --scope=@Ywodo-platform --registry=https://npm.pkg.github.com
"** command at least once in your command prompt.

```
"dependencies": {
        "@wodo-platform/wp-api-definitions": "1.0.0",

  }
```

More details can be found on <a href="https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry"> this page </a>

