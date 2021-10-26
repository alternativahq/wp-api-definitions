<p align="center">
  <a href="http://wodoplatform.io/" target="blank"><img src="images/wodo_logo.png" width="320" alt="Wodo Platform" /></a>
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
- [Async API Definitions](#async-api-definitions)
  - [Document Generations](#document-generations)
  - [Code Generation](#code-generation)
  - [Model Generation](#model-generation)
  - [Message Validation](#message-validation)
- [Sync API Definitions](#sync-api-definitions)
- [Github Actions](#github-actions)
- [Publish API Definitions as NPM Package Locally](#publish-api-definitions-as-npm-package-locally)


## Overview

Wodo Api Definitions module include system wide APIs, transports and schema definitions that are starting point while features are designed and developed.

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

To be updated

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
Logged in as serhattanrikut to scope @wodo-platform on https://npm.pkg.github.com/.
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

