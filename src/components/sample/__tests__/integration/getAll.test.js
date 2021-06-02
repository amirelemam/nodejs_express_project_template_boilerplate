const request = require('supertest');
const app = require('../../../../app');
const { toBeStringOrNull } = require('../../../../common/utils');

describe('GET /sample', () => {
  it('should return an array of objects', async (done) => {
    await request(app).post('/api/v1/drop-tables');
    await request(app).post('/api/v1/create-tables');
    await request(app).post('/api/v1/populate-tables');

    const response = await request(app).get('/api/v1/sample');

    expect.extend({ toBeStringOrNull });

    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          name: expect.any(String),
          another_id: expect.any(String),
          created_at: expect.any(String),
          updated_at: expect.any(String),
          deleted_at: null,
        }),
      ]),
    );
    done();
  });

  it('should return an empty array', async (done) => {
    await request(app).post('/api/v1/drop-tables');
    await request(app).post('/api/v1/create-tables');

    const response = await request(app).get('/api/v1/sample');

    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
    done();
  });

  it('should throw InternalServerError if an unknown error occurs', async (done) => {
    await request(app).post('/api/v1/drop-tables');

    const response = await request(app).get('/api/v1/sample');

    expect(response.status).toBe(500);
    done();
  });
});
