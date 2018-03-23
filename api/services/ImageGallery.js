var schema = new Schema({
    name: String,
    image: [String],
    keyword: String,
    season: {
        type: Schema.Types.ObjectId,
        ref: 'Season',
        index: true
    }
});

schema.plugin(deepPopulate, {
    populate: {
        season: {
            select: ""
        }
    }
});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('ImageGallery', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema, "season"));
var model = {
    findImagesForHomePage: function (data, callback) {
        ImageGallery.find({}).sort({
            createdAt: -1
        }).deepPopulate("season").limit(6).exec(function (err, data) {
            if (err || _.isEmpty(data)) {
                callback(err, "Nodata");
            } else {
                callback(null, data);
            }
        });
    },

    findAllImages: function (data, callback) {
        ImageGallery.aggregate([
            // Stage 1
            {
                $lookup: {
                    "from": "seasons",
                    "localField": "season",
                    "foreignField": "_id",
                    "as": "season"
                }
            },

            // Stage 2
            {
                $unwind: {
                    path: "$season",
                    preserveNullAndEmptyArrays: true // optional
                }
            },

            // Stage 3
            {
                $group: {
                    _id: "$season.name",
                    data: {
                        $push: {
                            name: "$name",
                            url: "$url",
                            image: "$image",
                            keyword: "$keyword"
                        }
                    }
                }
            }
        ]).cursor({
            batchSize: 2500,
            async: true
        }).exec(function (err, found) {
            if (err || _.isEmpty(found)) {
                callback(err, "noData");
            } else {
                callback(null, found);
            }
        });
    },

    searchImage: function (data, callback) {
        ImageGallery.aggregate([
            // Stage 1
            {
                $match: {
                    $or: [{
                        "keyword": {
                            $regex: data.keyword,
                            $options: "i"
                        }
                    }, {
                        "name": {
                            $regex: data.keyword,
                            $options: "i"
                        }
                    }]
                }
            }
        ]).cursor({
            batchSize: 2500,
            async: true
        }).exec(function (err, found) {
            console.log("**** in global search***", found);
            if (err || _.isEmpty(found)) {
                callback(err, "noData");
            } else {
                callback(null, found);
            }
        });
    }
};
module.exports = _.assign(module.exports, exports, model);