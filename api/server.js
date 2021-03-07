const express = require("express");
const app = express();
const connectDb = require("./src/connection");
const User = require("./src/User.model");
const UserReg = require("./src/User.model");
const cors = require("cors");
const PORT = 8080;
const bodyParser = require("body-parser").json();
app.use(cors());

app.get("/users", async (req, res) => {
    console.log(1234556);
    const users = await User.find();

    res.json(users);
});
app.post("/user-create", bodyParser, async (req, res) => {
    //  app.use(bodyParser.json());
    //  app.use(bodyParser.urlencoded({ extended: true }));
    const user = new User({ username: req.body.name });
    console.log(req.body);
    await user.save().then(() => console.log("User created"));

    res.send("User created \n");
});

// app.post("/signup", function (req, res, next) {
//     var user = {
//         Name: req.name,
//         Email: req.email,
//         Pass: req.pass,
//         Num: req.num,
//     };
//     const abc = new UserReg(user);
//     //  console.log(req);
//     console.log(req.name);

//     await abc.save().then(()=>console.log("User created"));
//     res.send("Logged In!");
// });

// app.get("/sign", function (req, res) {
//     res.set({
//         "Access-control-Allow-Origin": "*",
//     });
//     return res.redirect("sign_index.html");
// }).listen(3000);

app.listen(PORT, function () {
    console.log(`Listening on ${PORT}`);

    connectDb().then(() => {
        console.log("MongoDb connected");
    });
});
