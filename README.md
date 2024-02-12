# Hospital API for COVID-19 Testing and Quarantine Management

## Introduction

This API is designed to facilitate the management of COVID-19 patients and their reports in a hospital. The system is intended for use by both doctors and patients, allowing doctors to register patients, create reports, and view patient information, and patients to register and view their reports.

## User Types

1. **Doctors**
   - Can log in using credentials.
   - Register patients.
   - Create patient reports.

2. **Patients**
   - Register in the system.
   - View their reports.

## API Routes

- **Doctors**
  - `/doctors/register` - Register a new doctor with username and password.
  - `/doctors/login` - Log in to get a JWT for authentication.

- **Patients**
  - `/patients/register` - Register a new patient.

- **Reports**
  - `/patients/:id/create_report` - Create a new report for a specific patient.
  - `/patients/:id/all_reports` - List all reports of a patient (oldest to latest).
  - `/reports/:status` - List all reports of all patients filtered by a specific status.

## Report Fields

- Created by doctor
- Status (enums: Negative, Travelled-Quarantine, Symptoms-Quarantine, Positive-Admit)
- Date
- Required Routes

## Authentication

- The following routes require authentication using JWT:
  - `/doctors/register`
  - `/doctors/login`
  - `/patients/:id/create_report`
  - `/patients/:id/all_reports`

## Schemas

- **Doctor Schema**
  - Username
  - Password

- **Patient Schema**
  - Username
  - Password

- **Report Schema**
  - Created by doctor (Reference to Doctor Schema)
  - Status
  - Date
  - Other relevant fields

## Setup

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Configure the database settings in `config.js`.
4. Run the server: `npm start`.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- JSON Web Tokens (JWT)


## Contact

For any inquiries, please contact [Kondru Vasu] at [kondruvasu143@gmail.com].

