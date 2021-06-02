const request = require('supertest');
const app = require('../../../../app');

describe('GET /sample/:id', () => {
  it('should return element object if item exists', async (done) => {
    await request(app).post('/api/v1/drop-tables');
    await request(app).post('/api/v1/create-tables');
    await request(app).post('/api/v1/populate-tables');

    const response = await request(app).get(
      '/api/v1/sample/38c3de93-874d-444c-b83f-11e89cca252b',
    );

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      id: '38c3de93-874d-444c-b83f-11e89cca252b',
      name: 'John',
      another_id: '078-05-1120',
      created_at: expect.any(String),
      updated_at: expect.any(String),
      deleted_at: null,
    });
    done();
  });

  it('should return Not Found Error if item does not exist', async (done) => {
    await request(app).post('/api/v1/drop-tables');
    await request(app).post('/api/v1/create-tables');

    const response = await request(app).get(
      '/api/v1/sample/38c3de93-874d-444c-b83f-11e89cca252b',
    );

    expect(response.status).toBe(404);
    done();
  });

  it('should throw InternalServerError if an unknown error occurs', async (done) => {
    await request(app).post('/api/v1/drop-tables');

    const response = await request(app).get(
      '/api/v1/sample/38c3de93-874d-444c-b83f-11e89cca252b',
    );

    expect(response.status).toBe(500);
    done();
  });
});
