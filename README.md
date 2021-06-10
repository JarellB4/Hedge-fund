# Hedge-fund

## Introduction

Welcome to Hedge Fund, the application that easily allows anyone to post a job for any work they need done on their property and have contractors place a quote for the work!

## Login & Signup:

HedgeFund is a 2 part application for either a client or a contractor.  If you are a client you can log in to post your jobs or if you are a contractor you can log in to view jobs postings on a map.  Logins and signups are run through passport and bcrypt for security purposes. When signing up, you can either specify if you are a client looking for work to be done, or a contractor looking for jobs and winning work.

![Hedge Fund: Login](https://github.com/JarellB4/Hedge-fund/blob/main/client/public/images/hedgefund%20login.png)

Clients can create a new account and specify their name and location. Clients are allowed to create new jobs, as well as view previous jobs that they have created. When creating a job, you can enter in a description of what you need done and upload photos of the area in question. Once submitted, you can go back and edit your created jobs in case you need to modify your scope of work. 

![Client](https://github.com/JarellB4/Hedge-fund/blob/main/client/public/images/HedgeFundClient.mp4)

![Hedge Fund: Client Homepage](https://github.com/JarellB4/Hedge-fund/blob/main/client/public/images/hedgefund%20login.png)

## Contractors:

Contractors can create a new account where they can specify the name of their company and their location. Contractors have the ability to define a search radius on a Google map to make sure that they can view all relevant jobs within the distance they are willing to travel. Using Geospatial Queries within MongoDB, all clients within the specified readius of the contractors address will be shown on the map. The contractor can then click on any specified job to place a bid, review the photos, etc.

![Contractor](https://github.com/JarellB4/Hedge-fund/blob/main/client/public/images/HedgeFundContractor.mp4)

![Hedge Fund: Contractor Homepage](https://github.com/JarellB4/Hedge-fund/blob/main/client/public/images/contractor_homepage.png)

![Hedge Fund: Contractor Job Search](https://github.com/JarellB4/Hedge-fund/blob/main/client/public/images/contractor_jobsearch.png)

## Technologies used:

Express, Node, React, material-UI, Amazon S3, mongoDB, mongoose, GeoSpatial Queries, GeoJSON, Google Maps, OpenCage Geocoding API, Javascript, HTML, CSS, Passport, bcrypt, bootstrap

## Thank You!

Thank you for taking the time to look at our work. If you'd like to see any of our other projects, please feel free to drop by our Github Pages!
[Jody Brzovski](https://github.com/JodyBrzo)
[Javier Cardenas](https://github.com/Glatorian13)
[Dave Jeffers](https://github.com/zdjeffers)
[Jarrell Boone](https://github.com/JarellB4)
