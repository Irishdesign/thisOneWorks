const mongoose = require("mongoose");
const RegSchema = new mongoose.Schema(
    {
        Name: String,
        Email: String,
        Pass: String,
        Num: Number,
        reg_time: {
            type: Date,
            default: Date.now,
        },
    },
    { collection: "AddressCol" }
);
var UserReg = mongoose.model("UserReg", RegSchema);
module.exports = UserReg;

// app.post("/signup", function (req, res, next) {
//    const user = {
//        Name: req.name,
//        Email: req.email,
//        Pass: req.pass,
//        Num: req.num,
//    };
//    //  console.log(req);
//    console.log(req.name);
//    const userReg = new RexUsers(user);
//    userReg.create(user, function (err, newUser) {
//        if (err) return next(err);
//        //   req.session.user = email;
//        return res.send("Logged In!");
//    });
// });
