const PouchDB = require("pouchdb");
const {
  create,
  findById,
  findByIdAndDelete,
  findByIdAndUpdate,
  getAllDocuments,
  PouchDBService,
} = require("./index");

// Class version
const PostsDBService = new PouchDBService("db/posts");
(async () => {
  let res = await PostsDBService.create({ desc: "Post 1" });
  console.log("PostsDBService.create", res);

  res = await PostsDBService.findById(res.id);
  console.log("PostsDBService.findById", res);

  res = await PostsDBService.findByIdAndUpdate(res._id, {
    title: "Post 1 title",
  });
  console.log("PostsDBService.findByIdAndUpdate", res);

  res = await PostsDBService.findByIdAndDelete(res.id);
  console.log("PostsDBService.findByIdAndDelete", res);

  res = await PostsDBService.getAllDocuments();
  console.log("PostsDBService.getAllDocuments", res);
})();

// Functional version
const videosDB = new PouchDB("db/videos");
videosDB
  .info()
  .then(async (data) => {
    console.log(data);

    let doc = await create(videosDB, { title: "one" });
    console.log("create", doc);

    doc = await findById(videosDB, doc.id);
    console.log("findById", doc);

    doc = await findByIdAndUpdate(videosDB, doc._id, {
      title: "two?",
    });
    console.log("findByIdAndUpdate", doc);

    doc = await findById(videosDB, doc.id);
    console.log("findById", doc);

    doc = await findByIdAndDelete(videosDB, doc._id);
    console.log("findByIdAndDelete", doc);

    doc = await findById(videosDB, doc.id);
    console.log("findById", doc);

    doc = await getAllDocuments(videosDB);
    console.log("getAllDocuments", doc);
  })
  .catch((e) => {
    console.log(e);
  });
