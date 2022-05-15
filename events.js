const Emmiter = require('events');
const emmiter = new Emmiter;
emmiter.on('message', (data, first) => {
    console.log(data)
    console.log(first)
})
const MESSAGE = process.env.message || '';
if (MESSAGE) {
    emmiter.emit('message', MESSAGE, '123')
} else {
    emmiter.emit('message', 'you dont enter message')
}