import { Poll } from '../../models/pollSchema.js';

export const getAllPolls = async (req, res) => {
  try {
    const polls = await Poll.findAll();
    res.status(200).json(polls);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching polls', err });
  }
};
