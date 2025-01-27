import { Poll, Votes } from '../../models/pollSchema.js';

export const getPoll = async (req, res) => {
  try {
    const { pollId } = req.params;
    const poll = await Poll.findByPk(pollId, {
      include: [{model: Votes, as: 'votes'}]
    });

    if (!poll) {
      return res.status(404).json({ message: 'Poll not found'});
    }

    res.status(200).json(poll)
  } catch (err) {
    res.status(500).json({message: 'Error fetching poll', err});
  }
};
