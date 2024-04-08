//const { expect } = require("chai");
const supertest = require("supertest");
//const assert = require("chai").assert;
import {assert} from "chai";

let petId = 4879531;
let petName = "Radahn";
let petStatus = "available";

describe('Petstore Swagger - pet', () => {
    let request = supertest("https://petstore.swagger.io/v2")   

    it ('POST pet', () => {

        const jsonBody = require("../../vendors/pet1.json");
        return request
            .post("/pet")
            .send(jsonBody)
            .then((resp) => {
                expect(resp.statusCode).toBe(200)
                expect(resp.body.id).toBe(petId)
                ;

                assert.equal(resp.statusCode, 200)
                assert.equal(resp.body.id, petId)
                assert.equal(resp.body.name, petName)
                assert.equal(resp.body.status, petStatus)
            });
        
    });

    it('GET pet', () => {

        return request
            .get("/pet/" + petId)
            .then((resp) => {
                expect(resp.statusCode).toBe(200)
                expect(resp.body.id).toBe(petId)
                expect(resp.body.name).toEqual(petName)
                expect(resp.body.status).toBe(petStatus)
                ;
            })
        
    });

    it('PUT pet', () => {
        
        const jsonBody = require("../../vendors/pet1 PUT.json")
        return request
            .put("/pet")
            .send(jsonBody)
            .then((resp) => {
                expect(resp.statusCode).toBe(200)
                expect(resp.body.status).toBe("sold")
                ;
            })
    });

    it('DELETE pet', () => {
        return request
            .delete("/pet/" + petId)
            .then((resp) => {
                expect(resp.body.code).toEqual(200)
                expect(resp.body.type).toBe("unknown")
                expect(resp.body.message).toBe("" + petId + "")
                ;
            })
        
    });
});