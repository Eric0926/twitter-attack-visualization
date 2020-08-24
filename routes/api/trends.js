const axios = require("axios");
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
router.get("/", (req, res) => {
	axios
		.get("http://34.70.31.164:5000/trends")
		.then((result) => {
			console.log(result.data);
			res.send(result.data);
		})
		.catch((err) => {
			console.error(err.message);
			res.status(500).send("Server Error");
		});
});

module.exports = router;
