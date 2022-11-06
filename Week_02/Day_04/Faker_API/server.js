const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;

// logic

class User{
    constructor(){
        this.password = faker.internet.password()
        this.email = faker.internet.exampleEmail()
        this.phoneNumber = faker.phone.number('###-###-###')
        this.lastName = faker.name.lastName()
        this.firstName = faker.name.firstName()
        this._id = faker.random.numeric()
    }
}

class Company{
    constructor(){
        this._id = faker.random.numeric()
        this.name = faker.company.name()
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode("#####"),
            country: faker.address.countryCode()
        }
    }
}

// routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res)=>{
    res.json("Hello World")
})

app.get("/api/users/new", (req, res)=>{
    const user_01 = new User();
    res.json({User:user_01})
})

app.get("/api/companies/new", (req, res)=>{
    const company_01 = new Company();
    res.json({Company:company_01})
})

app.get("/api/user/company", (req, res)=>{
    const user_02 = new User();
    const company_02 = new Company();
    res.json({User:user_02,Company:company_02})
})

app.listen(port, () => console.log(`Listening on port: ${port}`));