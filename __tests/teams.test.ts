import request from 'supertest'
import app from '../app/start'
import DatabaseService from '../app/services/database-service'

describe('Team Test', () => {
  beforeAll(async () => {
    await DatabaseService.connect()
    await DatabaseService.populateData()
  })

  afterAll(async () => {
    await DatabaseService.close()
  })

  test('GET /api/team/:id return 200', async (done) => {
    // arrange
    const id = 370

    // act
    const res = await request(app).get(`/api/team/${id}`)

    // assert
    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('message')
    expect(res.body).toHaveProperty('data')
    done()
  })

  test('DELETE /api/team/:id return 200', async (done) => {
    // arrange
    const id = 200

    // act
    const res = await request(app).delete(`/api/team/${id}`)

    // assert
    expect(res.status).toBe(200)
    done()
  })

  test('PUT /api/team/:id return 200', async (done) => {
    // arrange
    const id = 369
    const body = {
      name: 'Ivory Coast Test'
    }

    // act
    const res = await request(app)
      .put(`/api/team/${id}`)
      .send(body)

    // assert
    expect(res.status).toBe(200)
    done()
  })

  test('PUT /api/team return 200', async (done) => {
    // arrange
    const body = {
      name: 'Indonesia Test',
      tla: 'ID',
      address: 'Jl. letnan jendral suprapto',
      email: 'id@gov.co.id',
      founded: 1998
    }

    // act
    const res = await request(app)
      .put(`/api/team`)
      .send(body)

    // assert
    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('message')
    expect(res.body.data).toHaveProperty('raw')
    done()
  })
  
  test('POST /api/team return 200', async (done) => {
    // arrange
    const body = {
      skip: 0,
      limit: 5
    }

    // act
    const res = await request(app)
      .post(`/api/team`)
      .send(body)

    // assert
    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('message')
    expect(res.body.data.length).toEqual(body.limit)
    expect(res.body.count).toBeGreaterThanOrEqual(5)
    done()
  })
})