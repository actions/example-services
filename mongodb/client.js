const { MongoClient } = require("mongodb");
const PORT = process.env.MONGODB_PORT || 27017;
const HOST = process.env.MONGODB_HOST || "localhost";

async function main() {
  const client = new MongoClient(`mongodb://${HOST}:${PORT}/dbName`, {
    useUnifiedTopology: true
  });
  try {
    await client.connect();
    await client
      .db()
      .collection("exampleCollection")
      .insertOne({
        someKey: "someVal"
      });
    const result = await client
      .db()
      .collection("exampleCollection")
      .findOne({});
    console.log(JSON.stringify(result));
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
