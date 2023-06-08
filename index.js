const server = require('./src/app');
require('dotenv').config();


server.listen(process.env.PORTA, () => console.log(`Serviço execultando na porta ${process.env.PORTA}`));