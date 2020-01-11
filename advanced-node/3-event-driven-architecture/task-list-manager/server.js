const EventEmitter = require('events');

class Server extends EventEmitter {
  constructor(client) {
    super();
    this.tasks = {};
    this.taskId = 1;
    process.nextTick(() => {
      this.emit(
        'response', 
        'Type a command (help to list commands)'
        );
    });
    
    client.on('command', (command, args) => {
      switch (command) {
        case 'help':
        case 'add':
        case 'ls':
        case 'delete':
          this[command](args);
          break;
        default:
          this.emit('response', 'uknown command');
      }
    });
  }

  tasksString() {
    return Object.keys(this.tasks).map(key => {
      return `${key}: ${this.tasks[key]}`;
    }).join('\n');

  }

  help() {
    this.emit('response', `Available commands:
    add task
    ls
    delete :id`
    );
  }
  add(args) {
    this.tasks[this.taskId] = args.join(' ');
    this.emit('response', `added task ${args.join(' ')}`);
    this.taskId++;
  }
  ls() {
    this.emit('response', `task:\n${this.tasksString()}`);
  }
  delete(args) {
    this.delete(this.tasks[args[0]]);
    this.emit('response', `deleted task ${args[0]}`);
  }
}

module.exports = (client) => new Server(client);