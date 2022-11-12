import mongoose from 'mongoose';
import { PORT } from './constants';

import * as serverService from './services/server.service';

const userName = 'DzmitryTsim';
const userPassword = 'Dzmitry1992';
const clasterInfo = 'cluster0.pmsahby.mongodb.net/?retryWrites=true&w=majority';


(async () => {
  try {
    await mongoose.connect(`mongodb+srv://${userName}:${userPassword}@${clasterInfo}`);
    serverService.server.listen(process.env.PORT || PORT, function () {
      console.log('Сервер ожидает подключения...');
    })
  } catch (error) {
    console.log(error);
  }
})();



process.on('SIGINT', async () => {
  await mongoose.disconnect();
  process.exit();
});
