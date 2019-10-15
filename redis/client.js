const redis = require("redis");

const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT
});

redisClient.on("error", function(err) {
    console.log("Error " + err);
});

redisClient.set("octocat", "Mona the Octocat", redis.print);
redisClient.hset("species", "octocat", "Cat", redis.print);
redisClient.hset(["species", "octocat", "Cat and Octopus"], redis.print);
redisClient.hkeys("species", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
    redisClient.quit();
});
