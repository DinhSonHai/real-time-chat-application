const express = require('express');

const app = express();
app.use(express.json());

const PORT = 5000;

app.get('/', (req, res) => {
  res.json('Server is running');
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
