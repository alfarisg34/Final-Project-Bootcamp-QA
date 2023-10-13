import http from "k6/http"
import { Trend } from 'k6/metrics'
import { describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.3/index.js';

const regsiterDuration = new Trend('register_duration', true)

export default function register() {
    describe('API Testing reqres.in Register', function () {
        describe('Register - Successful', function () {
            const payload = {
                email: 'eve.holt@reqres.in',
                password: 'pistol',
            }
            const res = http.post('https://reqres.in/api/register', payload)
            regsiterDuration.add(res.timings.duration)
            expect(res.status,'Status').to.equal(200)
        })
        describe('Register - Unsuccessful', function () {
            const payload = {
                email: 'sydney@fife',
            }
            const res = http.post('https://reqres.in/api/register', payload)
            regsiterDuration.add(res.timings.duration)
            expect(res.status,'Status').to.equal(400)
        })
    })
}