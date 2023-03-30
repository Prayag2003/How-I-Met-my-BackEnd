const mongoose = require("mongoose");

// returns a promise
// connection creation or creating a new DB if it DNE.
mongoose
  .connect("mongodb://0.0.0.0:27017/learningConnections", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection Successful !"))
  .catch((err) => console.log(err));

// Defining Schema ( structure of Documents )
const schema = new mongoose.Schema({
  // name is required compulsorily
  name: {
    type: String,
    required: true,
  },

  type: String,
  date: {
    type: Date,
    default: Date.now,
  },
  author: String,
  active: Boolean,
  videos: Number
});

// Modelling the Schema and creating the collections
// Creating a Class
// "Playlist" should be singular not in plural
const Playlist = mongoose.model("Playlist", schema);

// creating document
const reactPlaylist = new Playlist({
  name: "React JS",
  type: "Front End",
  author: "Prayag Bhatt",
  active: true,
  videos: 70,
});

// returns a promise ( takes some time , hence we used async and await)
// reactPlaylist.save();

const createDocument = async () => {
  try {
    const nodeJSPlaylist = new Playlist({
      name: "Node JS",
      type: "Back End",
      author: "Prayag Bhatt",
      active: true,
      videos: 25,
    });

    const expressJSPlaylist = new Playlist({
      name: "Express JS",
      type: "Back End",
      author: "Prayag Bhatt",
      active: true,
      videos: 55,
    });

    const mongoDBPlaylist = new Playlist({
      name: "Mongo DB",
      type: "BackEnd",
      author: "Prayag Bhatt",
      active: true,
      videos: 20,
    });

    const mongooseJSPlaylist = new Playlist({
      name: "Mongoose JS",
      type: "BackEnd",
      author: "Prayag Bhatt",
      active: true,
      videos: 10,
    });

    // for single document
    // const result = await nodeJSPlaylist.save();
    // console.log(result);

    // to insert multiple documents at once

    // passing the array of Documents
    const result = await Playlist.insertMany([
      nodeJSPlaylist,
      mongooseJSPlaylist,
      mongoDBPlaylist,
      expressJSPlaylist,
    ]);
    console.log(result);
  } catch {
    (err) => console.log(err);
  }
};

// createDocument();

const getDocument = async () => {
  try {
    console.log("Videos Greater than 10 : \n");
    const read = await Playlist
      .find({ videos: { $gt: 10 } })
      .select({ name: 1 })
    // .limit(1);
    // console.log(read);

    console.log("Videos Greater than equal to 50 : \n");
    const gte50 = await Playlist
      .find({ videos: { $gte: 50 } })
      .select({ name: 1, type: 1 })
    // console.log(gte50);


    console.log("Tech Stack that is not in Back End as well as Database : ")
    const backOrData = await Playlist
      // finds inside the array , whether it is backend or database
      .find({ type: { $nin: ["BackEnd", "DataBase"] } })
      .select({ name: 1 })
    // console.log(backOrData);


    console.log("Collections having Author as \"Prayag Bhatt\" or type as \"BackEnd\" . ");
    const authorOrBackEnd = await Playlist
      .find({ $and: [{ type: "BackEnd" }, { author: "Prayag Bhatt" }] })
      .select({ name: 1 })
      .countDocuments()
    // console.log(authorOrBackEnd);

    console.log("Counting the Documents : ");
    const countDocs = await Playlist
      .count();
    // console.log(countDocs);

    console.log("Sorting the Documents : ");
    const sortDocs = await Playlist
      .find({})
      .select({ name: 1 })
      .sort({ name: -1 })

    // console.log(sortDocs);


  } catch {
    (err) => console.log(err);
  }
};



const updateDocument = async (_id) => {

  try {
    const update = await Playlist.updateOne({ _id }, {

      $set: {
        name: "MongoDB"
      }
    })
    // console.log(update);

    const newUpdate = await Playlist.findByIdAndUpdate({ _id }, {
      $set: {
        name: "Mongo DataBase"
      }
    })
    console.log(newUpdate);
  }

  catch (err) {
    console.log(err);
  }
}

updateDocument("64256583554ed774953c900e");
getDocument();



/* Deleting the Document */
const deleteDocument = async (_id) => {
  try {
    // const del = await Playlist.deleteOne({ _id });
    // console.log(del);

    const del2 = await Playlist.findOneAndDelete({ _id });
    console.log(del2);
  }
  catch (err) {
    console.log(err);
  }

}

// deleteDocument("64258d023cc2b1e34fda6d58");
deleteDocument("64258fe5b92036631fcd979a");
