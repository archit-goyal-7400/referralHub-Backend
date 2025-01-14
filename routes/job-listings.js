const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const {
  postNewJob,
  getJobListings,
  postReferral,
} = require("../controllers/job-listings");
const isAuth = require("../middleware/is-auth");

////POST route for posting new job-listing and adding it in job-listings collection
router.post(
  "/addJob",
  isAuth,
  check("company", "company name is not present").not().isEmpty(),
  postNewJob
);

////
router.get("/jobListings", getJobListings);

////POST request to request referral
router.post("/requestReferral", isAuth, postReferral);

module.exports = router;
