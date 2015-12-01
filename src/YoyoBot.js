import Slack from './Slack'
import tricks from '../tricks.json'
import users from '../users.json'
import config from '../config.json'

export default class YoyoBot {
  init() {
    this.sb = new Slack(config.team, config.token);
    this.channel = config.channel;
  }

  start() {
    setInterval(() => {
      if (this.onHour()) {
        var trick = this.getTrick();
        var users = this.getUsers();
        this.sb.sendMessage(this.channel, this.buildMessage(users, trick));
      }
    }, 1000)
  }

  onHour() {
    var date = new Date();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var hours = date.getHours();
    return hours > 8 && hours < 20 && minutes === 0 && seconds === 0;
  }

  getTrick() {
    var index = Math.floor(Math.random() * tricks.length);
    return tricks[index];
  }

  getUsers() {
    var sorted = users.sort(function() { return 0.5 - Math.random() });
    return sorted.slice(Math.floor(Math.random() * 3)).join(', ');
  }

  buildMessage(users, trick) {
    return `Hey ${users}! Time to do the ${trick.name}: ${trick.url}`;
  }
}
