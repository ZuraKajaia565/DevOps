const app = require("./app");

const port = Number(process.env.PORT) || 3000;

app.listen(port, () => {
  console.log(`Listening on http://0.0.0.0:${port}`);
});
