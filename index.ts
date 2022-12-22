import { default as ObjectID } from "bson-objectid";
import PouchDB from "pouchdb";

/**
 * Function to create a document.
 *
 * @param  db PouchDB database instance
 * @param  _doc Data for document to be created
 *
 * @returns An object with creation status
 */
export const create = async (db: PouchDB.Database, _doc: object) => {
  try {
    if (!_doc) throw new Error("Document body is not defined.");

    const doc = await db.put({
      ..._doc,
      _id: new ObjectID().toHexString(),
    });

    return doc;
  } catch (error) {
    console.log(error);
    return null;
  }
};

/**
 * Function to find a document by it's ID.
 *
 * @param  db PouchDB database instance
 * @param  id ID of the document to be retrieved
 *
 * @returns The matching document
 */
export const findById = async (db: PouchDB.Database, id: string) => {
  try {
    const doc = await db.get(id);

    return doc;
  } catch (error) {
    console.log(error);
    return null;
  }
};

/**
 * Function to find a document by it's ID and update it.
 *
 * @param  db PouchDB database instance
 * @param  id ID of the document to be updated
 * @param _doc Fields to be updated in the document.
 *
 * @returns An object with updation status
 */
export const findByIdAndUpdate = async (
  db: PouchDB.Database,
  id: string,
  _doc: PouchDB.Core.Document<any>
) => {
  try {
    if (!id) throw new Error("id not specified for document to be updated.");

    const doc = await db.get(id);

    if (!doc) throw new Error(`Document not found with an _id of ${id}`);

    const updatedDoc = await db.put({
      ...doc,
      ..._doc,
      _id: doc._id,
      _rev: doc._rev,
    });

    return updatedDoc;
  } catch (error) {
    console.log(error);
    return null;
  }
};

/**
 * Function to find a document by it's ID and delete it.
 *
 * @param  db PouchDB database instance
 * @param  id ID of the document to be deleted
 *
 * @returns An object with deletion status
 */
export const findByIdAndDelete = async (db: PouchDB.Database, id: string) => {
  try {
    if (!id) throw new Error("id not specified for document to be deleted.");

    const doc = await db.get(id);

    if (!doc) throw new Error(`Document not found with an _id of ${id}`);

    const updatedDoc = await db.put({
      _id: doc._id,
      _rev: doc._rev,
      _deleted: true,
    });

    return updatedDoc;
  } catch (error) {
    console.log(error);
    return null;
  }
};

/**
 * Function to fetch all the documents in the database.
 *
 * @param  db PouchDB database instance
 *
 * @returns An array of objects
 */
export const getAllDocuments = async (db: PouchDB.Database) => {
  try {
    const res = await db.allDocs({ include_docs: true });

    return res.rows.map((doc) => {
      return {
        ...doc?.doc,
        id: doc?.id,
      };
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

/**
 * Class to manage a PouchDB database.
 */
export class PouchDBService {
  db: PouchDB.Database | null = null;

  /**
   * Constructor function for the PouchDBService class
   *
   * @param dbPath Database path and name.
   */
  constructor(dbPath: string) {
    if (!dbPath) throw new Error("dbPath not specified.");
    else {
      this.db = new PouchDB(dbPath);

      this.init(dbPath);
    }
  }

  /**
   * Async function to initialize the PouchDB database.
   *
   * @param dbPath Database path and name.
   */
  init = async (dbPath: string) => {
    if (this.db !== null) {
      const info = await this.db.info();

      if (!info) {
        this.db = null;
        throw new Error(`Incorrect configuration for ${dbPath}`);
      }

      console.log(`Configured PouchDB service for ${dbPath}`, info);
    }
  };

  /**
   * Function to create a document.
   *
   * @param  _doc Data for document to be created
   *
   * @returns An object with creation status
   */
  create = async (doc: PouchDB.Core.Document<any>) => {
    if (this.db !== null) await create(this.db, doc);
  };

  /**
   * Function to find a document by it's ID.
   *
   * @param  id ID of the document to be retrieved
   *
   * @returns The matching document
   */
  findById = async (id: string) => {
    if (this.db !== null) await findById(this.db, id);
  };

  /**
   * Function to find a document by it's ID and update it.
   *
   * @param  id ID of the document to be updated
   * @param _doc Fields to be updated in the document.
   *
   * @returns An object with updation status
   */
  findByIdAndUpdate = async (id: string, doc: PouchDB.Core.Document<any>) => {
    if (this.db !== null) await findByIdAndUpdate(this.db, id, doc);
  };

  /**
   * Function to find a document by it's ID and delete it.
   *
   * @param  id ID of the document to be deleted
   *
   * @returns An object with deletion status
   */
  findByIdAndDelete = async (id: string) => {
    if (this.db !== null) await findByIdAndDelete(this.db, id);
  };

  /**
   * Function to fetch all the documents in the database.
   *
   * @returns An array of objects
   */
  getAllDocuments = async () => {
    if (this.db !== null) await getAllDocuments(this.db);
  };
}
