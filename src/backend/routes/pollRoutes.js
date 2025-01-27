const express = require('express');
import { Poll, Votes } from '../models/pollSchema.js';

const router = express.Router();

//create a poll
router.post('/', async (req, res) => {
  try {
    const { question, options } = req.body;
    const poll = await Poll.create({ question, options});
    res.status(201).json(poll);
  } catch (error) {
    res.status(500).json({ message: 'Error creating poll', error });
  }
});

//get all polls
router.get('/', async (req, res) => {
  try {
    const polls = await Poll.findAll();
    res.status(200).json(polls);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching polls', err });
  }
});

//get one poll
router.get('/:pollId', async (req, res) => {
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
});

//get the active poll
router.get('/active/poll', async (req, res) => {
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
});

//get all votes for a poll
router.get('/:pollId/votes', async (req, res) => {
  try {
    const { pollId } = req.params;
    const poll = await Poll.findByPk(pollId, {
      include: [{model: Votes, as: 'votes'}]
    });
    
    if (!poll) {
      return res.status(404).json({message: 'Poll not found'});
    }
    
    res.status(200).json(poll.votes);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching votes', err });
  }
});

//vote on a poll
router.post('/:pollId/vote', async (req, res) => {
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
});

export default router;
