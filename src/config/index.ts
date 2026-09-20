export default {
    port: process.env.PORT || 5000,
    database_url: process.env.MONGODB_URL,
    redis: {
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
    },
}