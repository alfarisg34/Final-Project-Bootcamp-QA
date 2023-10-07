var request = require('supertest')('https://reqres.in/')
const chai = require('chai')
const chaiJsonSchemaajv = require('chai-json-schema-ajv')
const registerSuccessPayload = require('../schema/Register/registerSuccessPayload')
const registerSuccessSchema = require('../schema/Register/registerSuccessSchema')
const registerUnsuccessSchema = require('../schema/Register/registerUnsuccessSchema')
const registerUnsuccessPayload = require('../schema/Register/registerUnsuccessPayload')

chai.use(chaiJsonSchemaajv)
const expect = chai.expect

describe('Register API Tests', function () {
    it('Validasi API Register Succesful', async function () {
        const response = await request.post('api/register').send(registerSuccessPayload)
        expect(response.status).to.equal(200)
        expect(response.headers['content-type']).to.include('application/json')
        expect(response.body).have.jsonSchema(registerSuccessSchema)
        expect(response.body).to.be.an('object').that.is.not.empty
    })
    it('Validasi API Register Unsuccesful', async function () {
        const response = await request.post('api/register').send(registerUnsuccessPayload)
        expect(response.status).to.equal(400)
        expect(response.headers['content-type']).to.include('application/json')
        expect(response.body).have.jsonSchema(registerUnsuccessSchema)
        expect(response.body).to.be.an('object').that.is.not.empty
    })
})
