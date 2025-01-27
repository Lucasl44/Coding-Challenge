import React from 'react';
import { expect } from 'chai';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PollOptions } from '../pollOptions.js';

describe('pollOptions', () => {
  describe('when voted is false', () => {
    let wrapper;
    const poll = {
      options: ['option1', 'option2', 'option3'],
      id: 1,
      votes: [
        {
          id: 1,
          option: 'option1',
          pollId: 1
        },
        {
          id: 2,
          option: 'option1',
          pollId: 1
        },
        {
          id: 3,
          option: 'option2',
          pollId: 1
        }
      ]
    };
    beforeEach(() => {
      global.fetch = jest.fn();
      wrapper = render(<PollOptions poll={poll} setVoted={() => {}} voted={false}/>);
    });
    test('should render 3 options with the appropriate option text', () => {
      expect(screen.getByText('option1')).to.exist;
      expect(screen.getByText('option2')).to.exist;
      expect(screen.getByText('option3')).to.exist;
    });
    describe('SubmitButton', () => {
      test('should render a submit button', () => {
        expect(screen.getByText('Submit')).to.exist;
      });
      test('should not submit if no option is selected', async () => {
        const button = wrapper.getByRole(button, {name: 'Submit'});
        await userEvent.click(button);
        expect(global.fetch).to.not.have.beenCalled;
      });
    });
  });

  describe('when voted is true', () => {
    beforeEach(() => {
      render(<PollOptions poll={poll} setVoted={() => {}} voted={true}/>);
    });
    it('should render 3 disabled options', () => {
      expect(screen.getByText('option1')).toBeDisabled();
      expect(screen.getByText('option2')).toBeDisabled();
      expect(screen.getByText('option3')).toBeDisabled();
    });
    it('should not render a submit button', () => {
      expect(screen.getByText('Submit')).to.not.exist;
    });
  });

  describe('when a user selects an option', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = render(<PollOptions poll={poll} setVoted={() => {}} voted={false}/>);
    });
    it('should all the api with the correct option', async () => {
      const submitButton = wrapper.getByRole(button, {name: 'Submit'});
      const option = wrapper.getByRole(button, {name: 'option1'});
      await userEvent.click(option);
      await userEvent.click(submitButton);
      expect(global.fetch).to.have.been.called;
    });
  });
});
