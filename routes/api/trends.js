const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Trend = require("../../models/Trend");

// @route  POST api/trends
// @desc   Create a new trend
// @access Public
router.post(
	"/",
	[
		check("name", "Name is required").not().isEmpty(),
		check("party", "Party is required").not().isEmpty(),
		check("state", "State is required").not().isEmpty(),
		check("twitterID", "TwitterID is required").not().isEmpty(),
		check("reply", "Reply is required").not().isEmpty(),
		check("toxic", "Toxic is required").not().isEmpty(),
		check("opposing", "Opposing is required").not().isEmpty(),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const {
			name,
			party,
			state,
			twitterID,
			reply,
			toxic,
			opposing,
		} = req.body;

		try {
			trend = new Trend({
				name,
				party,
				state,
				twitterID,
				reply,
				toxic,
				opposing,
			});

			await trend.save();

			res.json(trend);
		} catch (err) {
			console.error(err.message);
			res.status(500).send("Server Error");
		}
	}
);

// @route  GET api/trends
// @desc   Get all trends
// @access Public
router.get("/", async (req, res) => {
	try {
		const trends = await Trend.find();
		res.json(trends);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

module.exports = router;
