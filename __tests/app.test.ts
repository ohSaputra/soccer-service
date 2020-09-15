import request from 'supertest'
import app from '../app/start'

describe('App Test', () => {
  test('GET /api/random-url should return 404', done => {
    // act
    request(app).get('/api/reset')

    // assert
      .expect(404, done)
  })

  test('GET /api/health should return 200', async (done) => {
    // act
    const res = await request(app).get('/api/health')

    // assert
    expect(res.status).toBe(200)
    expect(res.body).toEqual({message: 'OK'})
    done()
  })
})
