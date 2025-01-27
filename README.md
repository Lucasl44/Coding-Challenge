# Coding Challenge Poll App

In order to run the application you will need to have a mysql server running with a [pollapp] blank database ready.
Once you run the app the tables will be built in the database. 
run npm install to install all packages

Create a .env file in the root of the application and add 2 entries for the mysql database user and password: 
    MYSQL_USER="mysql user"
    MYSQL_PASSWORD="mysql password"
    
execute <npm run build:prod> to build the prodution version.
once this has completed execute <npm run server>

This will allow you to navigate to localhost:9876 to see the running application
However we have not yet created any polls.

In order to create your first poll open postman or an equivalent.
We have several endpoints available but lets start by creating a new poll.

Set the Content-Type in headers to application/json. and create a POST request on http://localhost:9876/api/polls

The body should look like this: 
{
  "question": "Your Poll Question?",
  "options": ["The", "Poll", "Options"]
}

Once this has been run you can refresh the browser and see the poll you created.
Any time you create a new poll this will become the active one that is displayed to the user.
To check the active poll you can create a new GET request on http://localhost:9876/api/polls/active/poll

This will display the active poll as well as any current votes on the poll.

There is two ways to vote on the active poll, you can use the browser to pick a vote and then submit, or you can use
the vote endpoint.

Note the id of the poll recorded when you ran the active poll GET request and create a new POST request on
http://localhost:9876/api/polls/:pollId/vote

The body for the request should look like this:
{
"option": "the option you want to vote for"
}

Other Endpoints
Return all votes for specific poll
    endpoint: http://localhost:9876/api/polls/:pollID/votes
    request: GET

Return all polls
    endpoint: http://localhost:9876/api/polls
    request: GET
    
Return a specific poll
    endpoint: http://localhost:9876/api/polls/:pollId


Once this has been set up, you should be able to vote on a poll by selecting an option and clicking submit. This will
update the database with the new vote and will display the % of votes for each poll option. 
The submit button will now disappear as you have already voted and will require a refresh to reappear.



Issues faced
The first issue I faced was with using mongoDb, when downloading mongoose there was some critical dependancy vunerabilities
after spending an hour trying to find a work around, I opted to switch to mysql and sequelize which didnt have any
vunerabilities. This also proved easy to use so i stuck with it going forward.

After that during development most of the issues i experienced were small and easy to fix and mostly developer error.
For example i had an issue with the vote being recorded on submit was the previous vote but this was because i had 
forgotten to setVoted and clear the selectedOption in a .then so it wasnt waiting for the post request for a new vote
to finish.

The main issue i actually experienced, which is the reason i delayed my handin by a day, was with running the tests.
I could not configure jest and babel correctly with import/export syntax. I spent hours buried in babel, jest and webpack
docs, however i could not figure out how to get babel to read updated javascript syntax. I have unfortunately not been able
to get this working, so i opted to write an example of how i would write a test for pollOptions.js. I choose this 
file as it had the most moving parts and rendered a few other components below this. I didnt want to just leave no 
test files because i couldnt get them running properly. 

I think this was mostly difficult as it was the first time ive used jest and set up a test suite from scratch since my
original course 3 years ago. I'm hoping by demonstating how i would test a component this will allow you to get an idea
of how i would construct tests. Ive reread it several times and made sure i cannot see any errors, however as I have not
been able to run it there may be some syntax mistakes or some issues with jest that I am unaware of.






