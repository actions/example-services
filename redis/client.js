
const redis = require("redis");

redisClient = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST);

redisClient.on("error", function(err) {
    console.log("Error " + err);
});

redisClient.set("string key", "string val", redis.print);
redisClient.hset("hash key", "hashtest 1", "some value", redis.print);
redisClient.hset(["hash key", "hashtest 2", "some other value"], redis.print);

Array.from({length: 10000}).forEach(function(i) {
  redisClient.set("key: " + i, "val: " + i, redis.print);
});
setTimeout(function() {
  Array.from({length: 10000}).forEach(function(i) {
    redisClient.set("key: " + i, "val: " + i, redis.print);
  });
}, 120000);
redisClient.hkeys("hash key", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
    redisClient.quit();
});
