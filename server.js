const express = require("express")
const app = express()
const port = 5000

app.use(express.json())


app.get('/', (req, res) =>{
    return res.send('Hello World')
})
app.listen(port, () => {
    console.log(`API server listening at http://localhost:${port}`);
  });