import { faker } from '@faker-js/faker';
import { application } from 'express';

import express from 'express';

const app = express();

class User{
    constructor() {
        this.userId = faker.datatype.uuid() 
        this.userName = faker.internet.userName()
    }
}

class Company{
    constructor(){
        this.userId = faker.datatype.uuid() 
        this.userName = faker.internet.userName()
    }
}

app.get('/api/users/new', (req, res) => {
    let newUser = new User
    res.status(200).send(newUser);
});

app.get(`/api/companies/new`, (req, res) => {
    let newCompany = new Company
    res.status(200).send(newCompany);
}); 

app.get(`/api/user/company`, (req, res) => {
    let newUser2 = new User
    let newCompany2 = new Company
    let arr = []
    arr.push(newUser2, newCompany2)
    res.status(200).send(arr);
});


app.listen(4000, () => console.log("Server running on port 4000"));





// We will be using faker to create random endpoints. above I have some code to help you get started in the assignment
// I want you to make this file into a server file and create me 3 endpoints

// Create an api route "/api/users/new" that returns a new user 

// Create an api route "/api/companies/new" that returns a new company

// Create an api route "/api/user/company" that returns both a new user and a new company