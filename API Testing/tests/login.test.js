var request = require('supertest')('https://reqres.in/')
const chai = require('chai')
const chaiJsonSchemaajv = require('chai-json-schema-ajv')
const loginSuccessPayload = require('../schema/Login/loginSuccessPayload')
const loginSuccessSchema = require('../schema/Login/loginSuccessSchema')
const loginUnsuccessSchema = require('../schema/Login/loginUnsuccessSchema')
const loginUnsuccessPayload = require('../schema/Login/loginUnsuccessPayload')

chai.use(chaiJsonSchemaajv)
const expect = chai.expect

describe('Login API Tests', function () {
    it('Validasi API Login Succesful', async function () {
        const response = await request.post('api/login').send(loginSuccessPayload)
        expect(response.status).to.equal(200)
        expect(response.headers['content-type']).to.include('application/json')
        expect(response.body).have.jsonSchema(loginSuccessSchema)
        expect(response.body).to.be.an('object').that.is.not.empty
    })
    it('Validasi API Login Unsuccesful', async function () {
        const response = await request.post('api/login').send(loginUnsuccessPayload)
        expect(response.status).to.equal(400)
        expect(response.headers['content-type']).to.include('application/json')
        expect(response.body).have.jsonSchema(loginUnsuccessSchema)
        expect(response.body).to.be.an('object').that.is.not.empty
    })
})
