export default class BotService{

      createBotIntent(){
      
         const intents = [
						{
							intent: 'greetings.bye',
							documents: ['goodbye for now', 'bye bye take care', 'okay see you later', 'bye for now', 'i must go'],
						},
						{
							intent: 'greetings.hello',
							documents: ['hello', 'hi', 'howdy'],
						},
						{
							intent: 'greetings.hellotg',
							documents: ['kamusta', 'anung lagay'],
						},
						{
							intent: 'question.intro',
							documents: ['can I ask question?', 'can you guide me', 'can you help me how to use this bot', 'can i ask somthing', 'can i talk someone'],
						},
						{
							intent: 'live.agent',
							documents: ['live agent', 'contact admin', 'i want to connect with admin', 'talk admin', 'ask admin', 'redirect to admin', 'call admin', 'push me to admin'],
						},
						// Add more intents and associated documents as needed
					];

					return intents;



      }

    getBotResponse(){
        const responses = {
					'greetings.bye': ['Till next time', 'See you soon!', 'Goodbye!'],
					'greetings.hello': ['Im audio visual bot how can I help you?', 'Is their anything you need?', 'If you have question just text me!'],
					'question.intro': ['Sure,I can help you with that', 'Of course Im audio visual bot willing to help in guiding how to use this app', 'Yes i can, Just ask me anything we will try to answer as I trained'],
					'live.agent': ['Ok will direct you to admin', 'Sure admin will reply please wait for a few minutes', 'Hold on a second admin saw your reply'],
					'greetings.hellotg': ['Ok naman ako,anu bha maitutulong ko sau?'],
					// Add more responses for other intents as needed
				};

				return responses;

    }

    
}