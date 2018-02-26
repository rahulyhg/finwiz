var kebabCase = require('kebab-case');
var schema = new Schema({
    title: String,
    articleImage: String,
    articleSmallImage: String,
    discription: String,
    order: Number
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Articles', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {

    getAllArticlesData: function (data, callback) {
        Articles.find({}).sort({
            order: 1
        }).exec(function (err, data) {
            if (err || _.isEmpty(data)) {
                callback(err, [])
            } else {
                callback(null, data)
            }
        })
    },

    findTop5Articles: function (data, callback) {
        Articles.find({}).sort({
            createdAt: -1
        }).limit(5).exec(function (err, data) {
            if (err || _.isEmpty(data)) {
                callback(err, "Nodata")
            } else {
                callback(null, data)
            }
        })
    },

    findDataByArticleTitle: function (data, callback) {
        console.log("Data",data)
        Articles.aggregate([{
                $match: {
                    "title": {
                        $regex: data.title,
                        $options: "i"
                    }
                }
            }]).cursor({
                batchSize: 1000
            })
            .exec(function (err, found) {
                if (err || _.isEmpty(found)) {
                    console.log("errData",err)
                    callback(err, "noData");
                } else {
                    console.log("foundData",found)

                    callback(null, found);
                }
            });
    }
};
module.exports = _.assign(module.exports, exports, model);