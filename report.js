require('dotenv').config()
const newman = require('newman')


newman.run(
    {
        collection: `${process.env.POSTMAN_COLLECTION_URL}?access_key=${process.env.POSTMAN_API_KEY}`,
        environment: require('./env.json'),
        iterationCount: 1,
        reporters: 'htmlextra',
        reporter: {
            htmlextra: {
                export: './Reports/report.html',
            }
        },
        insecure: true
    },
    (err) => {
        if (err) throw err
        console.log('collection run complete!')
    }
)