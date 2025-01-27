const express = require('express');
import { Poll, Votes } from '../models/pollSchema.js';
import { createPoll } from './handlers/createPoll.js';
import { getAllPolls } from './handlers/getAllPolls.js';
import { getActivePoll } from './handlers/getActivePoll.js';
import { getPoll } from './handlers/getPoll.js';
import { getAllPollVotes } from './handlers/getAllPollVotes.js'; 
import { vote } from './handlers/vote.js';
const router = express.Router();

//create a poll
router.post('/', createPoll);

//get all polls
router.get('/', getAllPolls);

//get one poll
router.get('/:pollId', getPoll);

//get the active poll
router.get('/active/poll', getActivePoll);

//get all votes for a poll
router.get('/:pollId/votes', getAllPollVotes);

//vote on a poll
router.post('/:pollId/vote', vote);

export default router;
