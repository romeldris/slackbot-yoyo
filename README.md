# slackbot-yoyo
Starting a yoyoclub for work? Have a Slack channel for your yoyoclub? This Slackbot can be used to mention memebers to practice randomly chosen beginner tricks from http://yoyotricks.com.

# Instructions

Clone the repo:

`$ git clone git@github.com:romeldris/slackbot-yoyo.git`

execute `npm install`

To get the Slackbot token go to: [https://{TEAM_NAME}.slack.com/services/new/slackbot](http://my.slack.com/services/new/slackbot)

Copy the token from the added Slackbot integration: `https://{TEAM_NAME}.slack.com/services/hooks/slackbot?token={TOKEN}`

Where `{TOKEN}` is something like `0abCDE1fGHiJK2m98TzBBtrNO`

Update the `config.json` with your team name, token, and club channel: 
```
{
  "team": "TEAM_NAME", //ie: http://{TEAM_NAME}.slack.com
  "token": "TOKEN",
  "channel": "channel"
}
```

Update the `users.json` with your club member's slack names
```
[
  "@john",
  "@smith"
]
```

You can run `npm start` to start the bot. 

Happy yo yoing!

# Future features
- Tests
- Error handling
- Handle more than 1 tricks page
- Automatically pull users
- More configuration for intervals
