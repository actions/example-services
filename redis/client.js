const redis = require("redis");

const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT
});

redisClient.on("error", function(err) {
    console.log("Error " + err);
});

// Sets the key "octocat" to a value of "Mona the octocat"
redisClient.set("octocat", "Mona the Octocat", redis.print);
// Sets a key to "octocat", field to "species", and "value" to "Cat"
redisClient.hset("species", "octocat", "Cat and Octopus", redis.print);
// Changes the "octocat" key's field and value
redisClient.hset(["species", "robotocat", "Cat and Robot"], redis.print);
// Gets all fields in "octocat" key
redisClient.hkeys("species", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
    redisClient.quit();
});
