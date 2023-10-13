import http from "k6/http"
import { Trend } from 'k6/metrics'
import { describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.3/index.js';
const usersDuration = new Trend('users_duration', true)

export default function users() {
    describe('API Testing reqres.in Users', function () {
        describe('Get List Users', function () {
            const res = http.get('https://reqres.in/api/users')
            usersDuration.add(res.timings.duration)
            expect(res.status,'Status').to.equal(200)
        })
        describe('Get Single User', function () {
            const res = http.get('https://reqres.in/api/users/2')
            usersDuration.add(res.timings.duration)
            expect(res.status,'Status').to.equal(200)
        })
        describe('Create User', function () {
            const payload = JSON.stringify({
                name: 'morpheus',
                job: "leader",
            })
            const res = http.post('https://reqres.in/api/users', payload)
            usersDuration.add(res.timings.duration)
            expect(res.status,'Status').to.equal(201)
        })
        describe('Update User', function () {
            const payload = JSON.stringify({
                name: 'morpheus',
                job: "zion resident",
            })
            const res = http.put('https://reqres.in/api/users/2', payload)
            usersDuration.add(res.timings.duration)
            expect(res.status,'Status').to.equal(200)
        })
        describe('Delete a todo', function () {
            const payload = JSON.stringify({})
            const res = http.del('https://reqres.in/api/users/2', payload)
            usersDuration.add(res.timings.duration)
            expect(res.status,'Status').to.equal(204)
        })
    })
}