const supertest = require("supertest")

describe('Teste CRUD - Petstore Swagger', () => {
    let massaPost1 = require('../../csvToJson/JsonFileConverted-POST.js')
    //csvToJson\JsonFileConverted-POST.js
    let massaPut1 = require('../../csvToJson/JsonFileConverted-PUT.js')

    let request = supertest("https://petstore.swagger.io/v2")

    // CRUD Teste com massa
    it.each(massaPost1.array.map(elem => [
        elem.petName,
        elem.petId,
        elem.categoryId,
        elem.categoryName,
        elem.tagsId,
        elem.tagsName
    ]))
    ('Teste - POST - massaCSV: %s', (petName, petId, categoryId, categoryName, tagsId, tagsName) => {
        const pet = require('../../vendors/json/pet1.json')

        pet.id = petId
        pet.category.id = categoryId
        pet.category.name = categoryName
        pet.name = petName
        pet.tags[0].id = tagsId
        pet.tags[0].name = tagsName

        return request
            .post('/pet')
            .send(pet)
            .then((response) => {
                console.log(response.body)
                expect(response.statusCode).toBe(200)
                expect(response.body.id).toBe(petId)
                expect(response.body.category.id).toBe(categoryId)
                expect(response.body.category.name).toBe(categoryName)
                expect(response.body.name).toBe(petName)
                expect(response.body.tags[0].id).toBe(tagsId)
                expect(response.body.tags[0].name).toBe(tagsName)
            })
    })


    it.each(massaPost1.array.map(elem => [
        elem.petId
    ]))
    ('Teste - GET - massaCSV: %s', (petId) => {
        const pet = require('../../vendors/json/pet1.json')

        pet.id = petId
        return request  
            .get('/pet/' + petId)
            .then((resp) => {
                expect(resp.statusCode).toEqual(200)
                expect(resp.body.status).toEqual('available')
            })
    })

    it.each(massaPut1.array.map(elem => [
        elem.petName,
        elem.petId,
        elem.categoryId,
        elem.categoryName,
        elem.tagsId,
        elem.tagsName,
        elem.status
    ]))
    ('Teste - PUT - massaCSV: %s', (petName, petId, categoryId, categoryName, tagsId, tagsName, status) => {
        const pet = require('../../vendors/json/pet1.json')

        pet.name = petName
        pet.id = petId
        pet.category.id = categoryId
        pet.category.name = categoryName
        pet.tags[0].id = tagsId
        pet.tags[0].name = tagsName
        pet.status = status

        return request
            .put('/pet')
            .send(pet)
            .then((resp) => {
                expect(resp.statusCode).toBe(200)
                expect(resp.body.id).toBe(petId)
                expect(resp.body.name).toBe(petName)
            })
    })

    it.each(massaPost1.array.map(elem => [
        elem.petId   
    ]))
    ('Teste - DELETE - massaCSV: %s', (petId) => {
        const pet = require('../../vendors/json/pet1.json')

        pet.id = petId
        return request
            .delete('/pet/' + petId)
            .then((resp) => {
                expect(resp.statusCode).toBe(200)
                expect(resp.body.code).toBe(200)
                expect(resp.body.type).toBe('unknown')
                expect(resp.body.message).toBe(petId.toString())
            })
    })
})