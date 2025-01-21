import mongoose from 'mongoose';

const voteSchema = new mongoose.Schema({
  voterId: {type: String, required: true},
  timestamp: {type: Date, default: Date.now}
});

const optionSchema = new mongoose.Schema({
  text: {type: String, required: true},
  votes: [voteSchema]
});

const pollSchema = new mongoose.Schema({
  question: {type: String, required: true},
  options: [optionSchema]
});

export const Poll = mongoose.model('Poll', pollSchema);
