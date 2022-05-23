const express = require("express");
const app = express();

app.use(express.json());

// import DB


// import Routers



// implement middleware

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`SERVER LISTENING AT http://localhost:${PORT}`);
});
