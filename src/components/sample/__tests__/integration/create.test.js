const request = require('supertest');
const app = require('../../../../app');

describe('POST /sample', () => {
  it('should return store created if successful', async (done) => {
    await request(app).post('/api/v1/drop-tables');
    await request(app).post('/api/v1/create-tables');

    const response = await request(app).post('/api/v1/sample').send({
      name: 'John',
      anotherId: '4cd84b0d-4673-4261-bf43-50095919eeb0',
    });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      id: expect.any(String),
      name: 'John',
      another_id: '4cd84b0d-4673-4261-bf43-50095919eeb0',
      created_at: expect.any(String),
      updated_at: expect.any(String),
      deleted_at: null,
    });
    done();
  });

  it('should return conflict error if duplicated', async (done) => {
    await request(app).post('/api/v1/drop-tables');
    await request(app).post('/api/v1/create-tables');

    await request(app).post('/api/v1/sample').send({
      name: 'John',
      anotherId: '4cd84b0d-4673-4261-bf43-50095919eeb0',
    });

    const response = await request(app).post('/api/v1/sample').send({
      name: 'John',
      anotherId: '4cd84b0d-4673-4261-bf43-50095919eeb0',
    });

    expect(response.status).toBe(409);
    done();
  });

  it('should return BadRequestError if wrong request', async (done) => {
    await request(app).post('/api/v1/drop-tables');
    await request(app).post('/api/v1/create-tables');

    const response = await request(app).post('/api/v1/sample').send({});

    expect(response.status).toBe(400);
    done();
  });

  it('should throw InternalServerError if an unknown error occurs', async (done) => {
    await request(app).post('/api/v1/drop-tables');

    const response = await request(app).post('/api/v1/sample').send({
      name: 'John',
      anotherId: '4cd84b0d-4673-4261-bf43-50095919eeb0',
    });

    expect(response.status).toBe(500);
    done();
  });
});
