Code built (under presure) during an Extreme Startup session.
We choose the TDD path but it didn’t make us win...

Install package using npm : 
'npm install'

Launch test using that command : 
'./node_modules/.bin/mocha -R spec'

or continuously like that :
'while true; do; sleep 1 && clear && ./node_modules/.bin/mocha -R spec; done;'

Launch server using nodemon (restart server after app has changed or when it crashes) : 
'./node_modules/.bin/nodemon --debug app.js'

