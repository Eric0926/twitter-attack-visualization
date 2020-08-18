const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TrendSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	party: {
		type: String,
		required: true,
	},
	state: {
		type: String,
		required: true,
	},
	twitterID: {
		type: String,
		required: true,
	},
	reply: {
		type: Number,
		required: true,
	},
	toxic: {
		type: Number,
		required: true,
	},
	opposing: {
		type: Number,
		required: true,
	},
});

module.exports = Trend = mongoose.model("trend", TrendSchema);
