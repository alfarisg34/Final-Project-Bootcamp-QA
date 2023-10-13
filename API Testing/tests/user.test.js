var request = require('supertest')('https://reqres.in/')
const chai = require('chai')
const chaiJsonSchemaajv = require('chai-json-schema-ajv')
const allUserSchema = require('../schema/User/allUserSchema')
const userSchema = require('../schema/User/userSchema')
const payloadCreateUser = require('../schema/User/payloadCreateUser')
const resultCreateUserSchema = require('../schema/User/resultCreateUserSchema')
const resultUpdateUserSchema = require('../schema/User/resultUpdateUserSchema')

chai.use(chaiJsonSchemaajv)
const expect = chai.expect

describe('Users API Tests', function () {
    after(async function () {
        // await new Promise(res => setTimeout(res, 1000 * 60))
    })
    it('Validasi API Get List Users', async function () {
        const response = await request.get('api/users')
        expect(response.status).to.equal(200)
        expect(response.headers['content-type']).to.include('application/json')
        expect(response.body.data).have.jsonSchema(allUserSchema)
        expect(response.body.data).to.be.an('array').that.is.not.empty
    })
    it('Validasi API Get Single User', async function () {
        const response = await request.get('api/users/2')
        expect(response.status).to.equal(200)
        expect(response.headers['content-type']).to.include('application/json')
        expect(response.body.data).have.jsonSchema(userSchema)
        expect(response.body.data).to.be.an('object').that.is.not.empty
    })
    it('Validasi API Get Single User Not Found', async function () {
        const response = await request.get('api/users/23')
        expect(response.status).to.equal(404)
        expect(response.body).to.be.an('object').that.is.empty
    })
    it('Validasi API Create User', async function () {
        const response = await request.post('api/users').send(payloadCreateUser)
        expect(response.status).to.equal(201)
        expect(response.headers['content-type']).to.include('application/json');
        expect(response.body).to.be.an('object').that.is.not.empty
        expect(response.body).have.jsonSchema(resultCreateUserSchema)
        expect(response.body).to.include(payloadCreateUser);
    })
    it('Validasi API Update User', async function () {
        const response = await request.put('api/users/2').send(payloadCreateUser)
        expect(response.status).to.equal(200)
        expect(response.headers['content-type']).to.include('application/json');
        expect(response.body).to.be.an('object').that.is.not.empty
        expect(response.body).have.jsonSchema(resultUpdateUserSchema)
        expect(response.body).to.include(payloadCreateUser);
    })
    it('Validasi API Delete User', async function () {
        const response = await request.delete('api/users/2')
        expect(response.status).to.equal(204)
    })
})
