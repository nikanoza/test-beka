import dotenv from "dotenv"
dotenv.config({ path: './config.env' });

import app from "./app"



const port = 3000; // You can choose any available port

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});