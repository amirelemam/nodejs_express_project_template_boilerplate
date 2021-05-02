const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const { Schema } = mongoose;

const SampleSchema = new Schema(
  {
    _id: {
      type: String,
      default: uuidv4,
    },
    foo: String,
    bar: {
      type: Boolean,
      default: false,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('samples', SampleSchema, 'samples');
