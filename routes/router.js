const express = require('express');         //importing express
const passport = require('passport');       //importing passport
const { registerDoctor, registerPatient, createReport, all_reports, ALLReports, login } = require('../controllers/userControllers');



const router = express.Router();

router.post('/doctors/register',registerDoctor); //Register a new doctor with username and password

router.post('/login', login);                    // Log in to get a JWT for authentication.

router.post('/patients/register', registerPatient);// Register a new patient.

router.post('/patients/:id/create_report', createReport); // Create a new report for a specific patient

router.get('/patients/:id/all_report',all_reports); //List all reports of a patient (oldest to latest 

router.get('/reports/:status', ALLReports); //List all reports of all patients filtered by a specific status



module.exports = router;       //exporting the router
