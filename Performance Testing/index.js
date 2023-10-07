import { sleep } from 'k6'

import thresholds from './config/thresholds.js'
import smoke_test_scenario from './config/smoke_test_scenario.js'
import average_load_test_scenario from './config/average_load_test_scenario.js'

import users from './groups/API/users.js'
import register from './groups/API/register.js'
import login from './groups/API/login.js'

const scenarioList = {
    smoke: smoke_test_scenario,
    average: average_load_test_scenario
}

export const options = {
    thresholds,
    scenarios: {
        current_scenario: scenarioList[__ENV.scenario] || smoke_test_scenario
    }
}

export function setup() {
}

export default function () {
    users()
    register()
    login()

    sleep(1)
}