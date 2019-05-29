global.fetch = require('node-fetch')
const app = require('./now-entry')

app.listen(3000, () => {
  console.log("WE RUNNIG")
});
