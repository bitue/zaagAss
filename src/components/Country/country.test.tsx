import { render, screen } from "@testing-library/react"
import App from "../../App"
import { getWeather } from "../exportAsyncFunc/fetch"
import FetchCountry from "../fetch/fetchCountry"

test('api call into document', async ()=> {
    const data = await FetchCountry.fetchWeather('canada')

    expect(data).toBeDefined()

})

test('api test for render country ', async()=> {
    const data = await FetchCountry.getCountry('canada') 
 
    expect(data).toBeDefined()
})

