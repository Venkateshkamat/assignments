const zod = require('zod');

const createCard = zod.object({
    name: zod.string(),
    description: zod.string(),
    links:zod.object({
        linkedin: zod.string(),
        twitter: zod.string()
    }),
    interests: zod.string().array()
})

module.exports = {
    createCard
}