import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import routerModules from './router/index.js';

// Define port
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors()); // Call cors() to properly use the middleware

// Setup Morgan for logging
app.use(morgan('dev'));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

routerModules.forEach((route) => {
	app.use(route);
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
