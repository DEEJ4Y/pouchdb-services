/// <reference types="pouchdb-core" />
/// <reference types="pouchdb-find" />
/// <reference types="pouchdb-mapreduce" />
/// <reference types="pouchdb-replication" />
import PouchDB from "pouchdb";
/**
 * Function to create a document.
 *
 * @param  db PouchDB database instance
 * @param  _doc Data for document to be created
 *
 * @returns An object with creation status
 */
export declare const create: (db: PouchDB.Database, _doc: object) => Promise<PouchDB.Core.Response | null>;
/**
 * Function to find a document by it's ID.
 *
 * @param  db PouchDB database instance
 * @param  id ID of the document to be retrieved
 *
 * @returns The matching document
 */
export declare const findById: (db: PouchDB.Database, id: string) => Promise<(PouchDB.Core.IdMeta & PouchDB.Core.GetMeta) | null>;
/**
 * Function to find a document by it's ID and update it.
 *
 * @param  db PouchDB database instance
 * @param  id ID of the document to be updated
 * @param _doc Fields to be updated in the document.
 *
 * @returns An object with updation status
 */
export declare const findByIdAndUpdate: (db: PouchDB.Database, id: string, _doc: PouchDB.Core.Document<any>) => Promise<PouchDB.Core.Response | null>;
/**
 * Function to find a document by it's ID and delete it.
 *
 * @param  db PouchDB database instance
 * @param  id ID of the document to be deleted
 *
 * @returns An object with deletion status
 */
export declare const findByIdAndDelete: (db: PouchDB.Database, id: string) => Promise<PouchDB.Core.Response | null>;
/**
 * Function to fetch all the documents in the database.
 *
 * @param  db PouchDB database instance
 *
 * @returns An array of objects
 */
export declare const getAllDocuments: (db: PouchDB.Database) => Promise<{
    id: string;
    _conflicts?: string[] | undefined;
    _attachments?: PouchDB.Core.Attachments | undefined;
    _id?: string | undefined;
    _rev?: string | undefined;
}[] | null>;
/**
 * Class to manage a PouchDB database.
 */
export declare class PouchDBService {
    db: PouchDB.Database | null;
    /**
     * Constructor function for the PouchDBService class
     *
     * @param dbPath Database path and name.
     */
    constructor(dbPath: string);
    /**
     * Async function to initialize the PouchDB database.
     *
     * @param dbPath Database path and name.
     */
    init: (dbPath: string) => Promise<void>;
    /**
     * Function to create a document.
     *
     * @param  _doc Data for document to be created
     *
     * @returns An object with creation status
     */
    create: (doc: PouchDB.Core.Document<any>) => Promise<PouchDB.Core.Response | null | undefined>;
    /**
     * Function to find a document by it's ID.
     *
     * @param  id ID of the document to be retrieved
     *
     * @returns The matching document
     */
    findById: (id: string) => Promise<(PouchDB.Core.IdMeta & PouchDB.Core.GetMeta) | null | undefined>;
    /**
     * Function to find a document by it's ID and update it.
     *
     * @param  id ID of the document to be updated
     * @param _doc Fields to be updated in the document.
     *
     * @returns An object with updation status
     */
    findByIdAndUpdate: (id: string, doc: PouchDB.Core.Document<any>) => Promise<PouchDB.Core.Response | null | undefined>;
    /**
     * Function to find a document by it's ID and delete it.
     *
     * @param  id ID of the document to be deleted
     *
     * @returns An object with deletion status
     */
    findByIdAndDelete: (id: string) => Promise<PouchDB.Core.Response | null | undefined>;
    /**
     * Function to fetch all the documents in the database.
     *
     * @returns An array of objects
     */
    getAllDocuments: () => Promise<{
        id: string;
        _conflicts?: string[] | undefined;
        _attachments?: PouchDB.Core.Attachments | undefined;
        _id?: string | undefined;
        _rev?: string | undefined;
    }[] | null | undefined>;
}
