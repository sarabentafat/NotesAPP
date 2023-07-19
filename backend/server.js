const express = require("express");
const dotenv=require("dotenv")
const userRoutes=require('./routes/userRoutes.js')
const connectDB=require('./config/db.js');
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");
dotenv.config()
connectDB()
const PORT = process.env.PORT;
const notes = [
  {
    _id: "1",
    title: "Day 1 of college",
    content:
      "I made a few new friends and introduced myself to a lot of new teachers.",
    category: "College",
  },
  {
    _id: "2",
    title: "Learned some Node JS",
    content: "Learned how to create a server in node JS and my first API",
    category: "Learning",
  },
  {
    _id: "3",
    title: "Watched some Anime",
    content: "Finished 2 seasons of Attack on Titan and My Hero academia.",
    category: "Entertainment",
  },
  {
    _id: 4,
    title: "Started React JS",
    content:
      "Made my first App in React JS, feels awesome to learn something new. I aim to be a full stack dev someday",
    category: "Learning",
  },
];
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json("api is running");
});

app.get("/api/notes", (req, res) => {
  // Assuming "notes" is defined elsewhere
  res.send(notes);
});
app.use("/api/users", userRoutes);
app.get("api/notes/:id",(req,res)=>{
  const note=notes.find((n)=>n._id===req.params.id)
  res.send(note)
})

app.use(notFound)
 app.use(errorHandler)
app.listen(PORT, () => {
  console.log(`Server running in development mode on port ${PORT}.`);
});
