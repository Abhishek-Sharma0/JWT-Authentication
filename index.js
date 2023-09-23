const express = require("express");
const auth = require("./routes/auth")
const posts = require("./routes/posts")

const app = express();

app.use(express.json())

app.use("/auth", auth);

app.use('/auth', require("./routes/auth"))
app.use('/posts', require("./routes/posts"))

app.get("/",(req,res)=>{
    res.send("Hi I am working")
})

app.listen(5000, () => {
    console.log("Now running on port 5000")
})