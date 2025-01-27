import { createPoll } from '../handlers/createPoll.js';

describe('create a poll', () => {
  let status;
  before(() => {
    const req = {
      body: {
        question: 'A question?',
        options: ['option1', 'option2', 'option3']
      }
    }
    status = () => {};
    const res = {status};
    createPoll(req, res);
  });
  it('should call res.status with the correct status code', () => {
    expect(status).to.have.beenCalled;
  });
});
