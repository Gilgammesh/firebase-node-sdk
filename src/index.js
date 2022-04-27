// Require dependencies
const app = require('./app');

// Run server
app.listen(process.env.APP_PORT, () => {
	console.log(`Server is running in port ${process.env.APP_PORT}`);
});
