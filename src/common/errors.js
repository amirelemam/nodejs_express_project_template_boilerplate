class GerericError extends Error {
  constructor(msg, status) {
    super(msg);
    this.status = status;
  }
}

module.exports.BadRequestError = (msg = "Bad Request") =>
  new GerericError(msg, 400);

module.exports.UnauthorizedError = (msg = "Unauthorized") =>
  new GerericError(msg, 401);

module.exports.ForbiddenError = (msg = "Forbidden") =>
  new GerericError(msg, 403);

module.exports.NotFoundError = (msg = "Not Found") =>
  new GerericError(msg, 404);

module.exports.ConflictError = (msg = "Conflict") => new GerericError(msg, 409);

module.exports.UnprocessableEntityError = (msg = "Unprocessable Entity") =>
  new GerericError(msg, 422);

module.exports.InternalServerError = (msg = "Internal Server Error") =>
  new GerericError(msg, 500);
