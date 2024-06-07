const supertest = require("supertest");

describe('Petstore Swagger - Teste CRUD - User', () => {
    let request = supertest("https://petstore.swagger.io/v2");

    let userId = 152997;
    let username = "TF";
    let lastName = "Fergusson";
    let password = "123987";

    it('POST user', () => {
        const jsonBody = require("../../vendors/user1.json");
        
            return request
                .post("/user")
                .send(jsonBody)
                .then((resp) => {
                    expect(resp.statusCode).toBe(200);
                    expect(resp.body.code).toBe(200);
                    expect(resp.body.type).toBe("unknown");
                    expect(resp.body.message).toEqual("" + userId + ""); 
                });
    });

    it('GET user', () => {
        return request
            .get("/user/" + username)
            .then((resp) => {
                expect(resp.statusCode).toBe(200);
                expect(resp.body.id).toEqual(userId);
                expect(resp.body.username).toBe(username);
                expect(resp.body.lastName).toBe(lastName);
                expect(resp.body.password).toBe(password);
            });
        
    });

    it('PUT user', () => {
        const jsonBody = require("../../vendors/user1 PUT.json");
        return request
            .put("/user/" + username)
            .send(jsonBody)
            .then((resp) => {
                expect(resp.statusCode).toBe(200);
                expect(resp.body.code).toBe(200);
                expect(resp.body.type).toBe("unknown");
                expect(resp.body.message).toBe("" + userId + "");
            });
        
    });

    it('DELETE user', () => {
        return request
            .delete("/user/" + username)
            .then((resp) => {
                expect(resp.statusCode).toEqual(200);
                expect(resp.body.code).toEqual(200);
                expect(resp.body.type).toEqual("unknown");
                expect(resp.body.message).toEqual(username);
            });
        
    });
})