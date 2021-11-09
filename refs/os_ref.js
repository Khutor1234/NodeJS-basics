const os = require('os')


//платформа
console.log(os.platform())

//архитектура
console.log(os.arch())

//общая информация процесора
// console.log(os.cpus())

//Свободная память
console.log(os.freemem())

//всего памяти
console.log(os.totalmem())

//корневая директория
console.log(os.homedir())

//сколько система работает
console.log(os.uptime())