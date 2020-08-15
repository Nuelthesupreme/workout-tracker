## mongo-workout-tracker
The workout tracker allows its users to keep  track workouts progress within the week using Mongodb database for storage and express for connectivity. The workout exercises are broken down into two categories; cardio and resistance with different input field types . When the users entere their prefered exercises they can view workout progress feedback on the dashboard to view their weekly progress.

## Instillation
 run npm install to install the necessary node modules. Once installed, start up your Mongo database then run npm start to start a localhost.

## Usage
When a user enters the application they will first be presented with the option to continue workout or starting a new one.

When the user  enters a new workout, a new session is created, the users will then be presented with the option of either cardio or resistance.

Depending on their choice they are presented with a set of options to choose from.

once  the details have been entered, they can add another exercise or complete which take them back to the inital screen with quick summary updated.

If the users want to check the weeks progression they can click to the  dashboard on the top left which will show the current weeks overview in charts, it includes:  the workout duration per day,  the pounds lifted and a break down of the exercises that were performed.