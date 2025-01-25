const express = require('express');
import { Poll, Votes } from '../models/pollSchema.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { question, options } = req.body;
    const poll = await Poll.create({ question, options});
    res.status(201).json(poll);
  } catch (err) {
    res.status(500).json({ message: 'Error creating poll', err });
  }
});

router.get('/', async (req, res) => {
  try {
    const polls = await Poll.findAll();
    res.status(200).json(polls);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching polls', err });
  }
});

router.get('/:pollId/votes', async (req, res) => {
  try {
    const { pollId } = req.params;
    const poll = await Poll.findByPk(pollId, { include: [Vote] });
    
    if (!poll) {
      return res.status(404).json({message: 'Poll not found'});
    }
    
    res.status(200).json(poll.Votes);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching votes', err });
  }
});

router.post('/:pollId/vote', async (req, res) => {
  try {
    const { pollId } = req.params;
    const { option } = req.body;
    const poll = await Poll.findByPk(pollId);

    if (!poll || !poll.options.includes(option)) {
      return res.status(400).json({ message: 'Invalid poll or option' });
    }
    
    const vote = await Vote.create({ pollId, option });
    res.status(201).json(vote);
  } catch (err) {
    res.status(500).json({ message: 'Error voting', err });
  }
});

export default router;
