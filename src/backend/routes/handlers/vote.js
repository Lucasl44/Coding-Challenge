import { Poll, Votes } from '../../models/pollSchema.js';

export const vote = async (req, res) => {
  try {
    const { pollId } = req.params;
    const { option } = req.body;
    const poll = await Poll.findByPk(pollId);

    if (!poll || !poll.options.includes(option)) {
      return res.status(400).json({ message: 'Invalid poll or option', options: poll.options, option });
    }
    
    const vote = await Votes.create({ pollId, option });
    res.status(201).json(vote);
  } catch (err) {
    res.status(500).json({ message: 'Error voting', err });
  }
};
