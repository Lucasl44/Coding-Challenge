# Coding Challenge Poll App

In order to run the application you will need to have a mysql server running with a [pollapp] blank database ready.
Once you run the app the tables will be built in the database. 
run npm install to install all packages

Create a .env file in the root of the application and add 2 entries for the mysql database user and password: 
    MYSQL_USER="mysql user"
    MYSQL_PASSWORD="mysql password"
    
execute <npm run build:rel> to build the relase version.
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

//show how to return all votes for this poll,
//show how to return all polls
//show how to return a specific poll
//show how to get all votes for a poll

//Discuss issues faced with mongodb 
//Discuss how to test parts of the application 


