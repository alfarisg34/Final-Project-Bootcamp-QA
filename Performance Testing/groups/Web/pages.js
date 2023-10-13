import http from "k6/http"
import { Trend } from 'k6/metrics'
import { describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.3/index.js';

const pagesDuration = new Trend('pages_duration', true)

export default function pages() {
    describe('Performance Web Testing - Tealium', function () {
        describe('Home Page', function () {
            const res = http.get('https://ecommerce.tealiumdemo.com/')
            pagesDuration.add(res.timings.duration)
            expect(res.status,'Status').to.equal(200)
        })
        describe('Login Page', function () {
            const res = http.get('https://ecommerce.tealiumdemo.com/customer/account/login/')
            pagesDuration.add(res.timings.duration)
            expect(res.status,'Status').to.equal(200)
        })
        describe('Register Page', function () {
            const res = http.get('https://ecommerce.tealiumdemo.com/customer/account/create/')
            pagesDuration.add(res.timings.duration)
            expect(res.status,'Status').to.equal(200)
        })
        describe('Women Page', function () {
            const res = http.get('https://ecommerce.tealiumdemo.com/women.html')
            pagesDuration.add(res.timings.duration)
            expect(res.status,'Status').to.equal(200)
        })
        describe('Men Page', function () {
            const res = http.get('https://ecommerce.tealiumdemo.com/men.html')
            pagesDuration.add(res.timings.duration)
            expect(res.status,'Status').to.equal(200)
        })
        describe('Accessories Page', function () {
            const res = http.get('https://ecommerce.tealiumdemo.com/accessories.html')
            pagesDuration.add(res.timings.duration)
            expect(res.status,'Status').to.equal(200)
        })
    })
}