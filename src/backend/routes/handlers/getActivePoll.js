import { Poll, Votes } from '../../models/pollSchema.js';

export const getActivePoll = async (req, res) => {
    try {
    const activePoll = await Poll.findOne({
      order: [['createdAt', 'DESC']],
      include: [{model: Votes, as: 'votes'}]
    });
    if (!activePoll) {
      return res.status(404).json({message: 'No polls found'});
    }
    
    res.status(200).json(activePoll)
  } catch (err) {
    res.status(500).json({message: 'Error fetching the active poll', err});
  }
};
