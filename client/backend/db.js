const mongoose = require('mongoose')

const mongoDB = async () => {
    const dburl = 'mongodb+srv://hafizasad398:dadabhai123@gofood.kwqopmm.mongodb.net/goFoodData?retryWrites=true&w=majority'
    await mongoose.connect(dburl).then(async()=>{
        console.log('db connected')
        global.fetchedData= await mongoose.connection.db.collection('food_item').find({}).toArray()
        console.log(global.fetchedData)
        
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = mongoDB