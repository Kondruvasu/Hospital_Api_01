const express = require('express');         //importing express
const passport = require('passport');       //importing passport
const { registerDoctor, registerPatient, createReport, all_reports, ALLReports, login } = require('../controllers/userControllers');



const router = express.Router();

router.post('/doctors/register',registerDoctor); //To register Doctor

router.post('/login', login);                    //to login doctor

router.post('/patients/register', registerPatient);//To register patient

router.post('/patients/:id/create_report', createReport); //To create_report of patient

router.get('/patients/:id/all_report',all_reports); //To check patients all_report 

router.get('/reports/:status', ALLReports); //To check patient report status



module.exports = router;       //exporting the router
