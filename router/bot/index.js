import express from 'express'
import pkg from 'node-nlp';
const { NlpManager } = pkg;

import BotService from '../../services/index.js';

const manager = new NlpManager({ languages: ['en'] });

const BotRouter = express.Router();

const botService = new BotService();


BotRouter.get('/bot', async (req, res) => {


    const intent = await botService.createBotIntent();
		const response = await botService.getBotResponse();
		const queryparams = req.query.msg;


     intent.forEach((item) => {
				item.documents.forEach((document) => manager.addDocument('en', document, item.intent));
			});

      Object.keys(response).forEach((intent) => {
        response[intent].forEach((res) => {
          manager.addAnswer('en', intent, res);
        });
      });

        await manager.train();

       const geIntentResponseAnswer = await manager.process('en', queryparams);

			const getAnswer = geIntentResponseAnswer.answer;

        if (getAnswer) {
		
          res.status(200).json({ answer: getAnswer });


				} else {
       	     res.status(200).json({ answer: `Sorry, I don't know that,can you rephrase it?` });
			
        }



	
});


export default BotRouter;