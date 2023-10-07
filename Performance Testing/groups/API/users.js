import http from "k6/http"

import { describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.3/index.js';

export default function users() {
    describe('API Testing reqres.in Users', function () {
        describe('Get List Users', function () {
            const res = http.get('https://reqres.in/api/users')
            expect(res.status,'Status').to.equal(200)
        })
        describe('Get Single User', function () {
            const res = http.get('https://reqres.in/api/users/2')
            expect(res.status,'Status').to.equal(200)
        })
        describe('Create User', function () {
            const payload = JSON.stringify({
                name: 'morpheus',
                job: "leader",
            })
            const res = http.post('https://reqres.in/api/users', payload)
            expect(res.status,'Status').to.equal(201)
        })
        describe('Update User', function () {
            const payload = JSON.stringify({
                name: 'morpheus',
                job: "zion resident",
            })
            const res = http.put('https://reqres.in/api/users/2', payload)
            expect(res.status,'Status').to.equal(200)
        })
        describe('Delete a todo', function () {
            const payload = JSON.stringify({})
            const res = http.del('https://reqres.in/api/users/2', payload)
            expect(res.status,'Status').to.equal(204)
        })
    })
}