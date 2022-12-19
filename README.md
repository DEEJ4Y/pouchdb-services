# pouchdb-services

A set of [`PouchDB`](https://pouchdb.com/) service functions and a class version of them, with `mongodb` style `ObjectID` id's for all your documents.

- [Examples](https://github.com/DEEJ4Y/pouchdb-services/blob/main/example.js)
- [Library](https://github.com/DEEJ4Y/pouchdb-services/blob/main/index.js)

## Installation

- Install the package via npm

  ```shell
  npm install pouchdb-services
  ```

- Require the services:

  ```js
  const {
    create,
    findById,
    findByIdAndDelete,
    findByIdAndUpdate,
    getAllDocuments,
    PouchDBService,
  } = require("pouchdb-services");
  ```

## Try it out

- Clone this repository
- Install the packages:

  ```shell
  npm install
  ```

- Run the example:

  ```shell
  node example.js
  ```
