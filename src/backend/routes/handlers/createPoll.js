import { Poll } from '../../models/pollSchema.js';

export const createPoll = async (req, res) => {
  try {
    const { question, options } = req.body;
    const poll = await Poll.create({ question, options});
    res.status(201).json(poll);
  } catch (error) {
    res.status(500).json({ message: 'Error creating poll', error });
  }
};
