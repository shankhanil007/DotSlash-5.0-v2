const express = require("express");
const hbs = require("hbs");
const compression = require("compression");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
const dotenv = require("dotenv")
const Email = require("./models/emailModel");
const cors = require("cors");
app.use(cors());

dotenv.config();
async function mongoConnect(){
	await mongoose.connect(process.env.MONGOURI)
		.then(() => {
			console.log("Connected to database");
		})
}

mongoConnect();

// compress all responses
app.use(compression());

// express middleware setup
app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended:true}))
app.use(express.json());


// partial setup
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/prizes", (req, res) => {
	res.render("prizes");
  });

app.get("/coc", (req, res) => {
  res.render("coc");
});

app.post("/api/email", async (req, res) => {
	const emailExsist = await Email.findOne({email : req.body.email});
	if(emailExsist) return res.redirect("/");

	const newEmail = new Email({
		email : req.body.email
	})

	try{
		const savedEmail = await newEmail.save();
		res.redirect("/");
	}catch(err){
		return res.redirect("/");
	}
})

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
