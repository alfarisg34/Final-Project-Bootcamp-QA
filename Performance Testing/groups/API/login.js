import http from "k6/http"
import { Trend } from 'k6/metrics'

import { describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.3/index.js';

const loginDuration = new Trend('login_duration', true)

export default function login() {
    describe('API Testing reqres.in Login', function () {
        describe('Login - Successful', function () {
            const payload = {
                email: 'eve.holt@reqres.in',
                password: 'cityslicka',
            }
            const res = http.post('https://reqres.in/api/login', payload)
            loginDuration.add(res.timings.duration)
            expect(res.status,'Status').to.equal(200)
        })
        describe('Login - Unsuccessful', function () {
            const payload = {
                email: 'peter@klaven',
            }
            const res = http.post('https://reqres.in/api/login', payload)
            loginDuration.add(res.timings.duration)
            expect(res.status,'Status').to.equal(400)
        })
    })
}