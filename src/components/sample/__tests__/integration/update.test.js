const request = require('supertest');
const app = require('../../../../app');

describe('PUT /sample/:id', () => {
  it('should return OK if updated successfully', async (done) => {
    await request(app).post('/api/v1/drop-tables');
    await request(app).post('/api/v1/create-tables');
    await request(app).post('/api/v1/populate-tables');

    const response = await request(app)
      .put('/api/v1/sample/38c3de93-874d-444c-b83f-11e89cca252b')
      .send({
        name: 'new name',
      });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      id: '38c3de93-874d-444c-b83f-11e89cca252b',
      name: 'new name',
      another_id: '078-05-1120',
      created_at: expect.any(String),
      updated_at: expect.any(String),
      deleted_at: null,
    });
    done();
  });

  it('should return Bad Request Error if body has non-existent key', async (done) => {
    await request(app).post('/api/v1/drop-tables');
    await request(app).post('/api/v1/create-tables');
    await request(app).post('/api/v1/populate-tables');

    const response = await request(app)
      .put('/api/v1/sample/38c3de93-874d-444c-b83f-11e89cca252b')
      .send({
        newField: 'newValue',
      });

    expect(response.status).toBe(400);
    done();
  });

  it('should return Not Found Error if item does not exist', async (done) => {
    await request(app).post('/api/v1/drop-tables');
    await request(app).post('/api/v1/create-tables');

    const response = await request(app)
      .put('/api/v1/sample/38c3de93-874d-444c-b83f-11e89cca252b')
      .send({
        name: 'Joe',
      });

    expect(response.status).toBe(404);
    done();
  });

  it('should throw InternalServerError if an unknown error occurs', async (done) => {
    await request(app).post('/api/v1/drop-tables');

    const response = await request(app).put(
      '/api/v1/sample/38c3de93-874d-444c-b83f-11e89cca252b',
    );

    expect(response.status).toBe(500);
    done();
  });
});
