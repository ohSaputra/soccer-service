import request from 'supertest'
import app from '../app/start'
import DatabaseService from '../app/services/database-service'

describe('Player Test', () => {
  beforeAll(async () => {
    await DatabaseService.connect()
    await DatabaseService.populateData()
  })

  afterAll(async () => {
    await DatabaseService.close()
  })

  test('GET /api/player/:id return 200', async (done) => {
    // arrange
    const id = 3350

    // act
    const res = await request(app).get(`/api/player/${id}`)

    // assert
    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('message')
    expect(res.body).toHaveProperty('data')
    done()
  })

  test('DELETE /api/player/:id return 200', async (done) => {
    // arrange
    const id = 200

    // act
    const res = await request(app).delete(`/api/player/${id}`)

    // assert
    expect(res.status).toBe(200)
    done()
  })

  test('PUT /api/player/:id return 200', async (done) => {
    // arrange
    const id = 3334
    const body = {
      name: 'Elysee Sriel'
    }

    // act
    const res = await request(app)
      .put(`/api/player/${id}`)
      .send(body)

    // assert
    expect(res.status).toBe(200)
    done()
  })

  test('PUT /api/player return 200', async (done) => {
    // arrange
    const body = {
      name: 'Zahara Olive Testing',
      dateOfBirth: '6/11/2020',
      countryOfBirth: 'Malta',
      nationality: 'Poland',
      position: 'Defense',
      team: 370
    }

    // act
    const res = await request(app)
      .put(`/api/player`)
      .send(body)

    // assert
    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('message')
    expect(res.body.data).toHaveProperty('raw')
    done()
  })
  
  test('POST /api/player return 200', async (done) => {
    // arrange
    const body = {
      skip: 0,
      limit: 5
    }

    // act
    const res = await request(app)
      .post(`/api/player`)
      .send(body)

    // assert
    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('message')
    expect(res.body.data.length).toEqual(body.limit)
    expect(res.body.count).toBeGreaterThanOrEqual(50)
    done()
  })
})