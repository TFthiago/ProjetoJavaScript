const supertest = require("supertest");
import {assert} from "chai";

//let petId = 4879531;
let petId;
let petName;
let petStatus;

describe('Petstore Swagger - Teste CRUD - pet', () => {
    let request = supertest("https://petstore.swagger.io/v2");

    it ('POST pet', () => {

        const jsonBody = require("../../vendors/pet1.json");
        return request
            .post("/pet")
            .send(jsonBody)
            .then((resp) => {
                petId = resp.body.id;
                petName = resp.body.name;
                petStatus = resp.body.status;
                assert.equal(resp.statusCode, 200);
                assert.equal(resp.body.id, petId);
                assert.equal(resp.body.name, petName);
                assert.equal(resp.body.status, petStatus);
            });
        
    });

    it('GET pet', () => {

        return request
            .get("/pet/" + petId)
            .then((resp) => {
                assert.equal(resp.statusCode, 200);
                assert.equal(resp.body.id, petId);
                assert.isArray(resp.body.tags, 'tags deve ser um array');
                assert.equal(resp.body.tags[0].id, 15, 'tags[0].id deve ser 15');
                assert.equal(resp.body.status, petStatus);
            });
        
    });

    it('PUT pet', () => {
        
        const jsonBody = require("../../vendors/pet1 PUT.json");
        return request
            .put("/pet")
            .send(jsonBody)
            .then((resp) => {
                assert.equal(resp.statusCode, 200);
                assert.equal(resp.body.status, "sold");
            });
    });

    it('DELETE pet', () => {
        return request
            .delete("/pet/" + petId)
            .then((resp) => {
                assert.equal(resp.body.code, 200);
                assert.equal(resp.body.type, "unknown");
                assert.equal(resp.body.message, "" + petId + "");
            });
        
    });
})