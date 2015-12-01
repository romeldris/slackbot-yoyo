import request from 'request'
export default class Slack {
    constructor(team, token) {
      this.team = team;
      this.token = token;
    }

    sendMessage(channel, message) {
      request.post({
        url: this.buildUrl(channel),
        body: message
      }, function (err,httpResponse,body) {
        if (err) {
          console.log(err);
        }
      });
      return this.buildUrl(channel);
    }

    buildUrl(channel) {
      return `https://${this.team}.slack.com/services/hooks/slackbot?token=${this.token}&channel=%23${channel}`;
    }
}
