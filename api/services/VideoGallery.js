var schema = new Schema({
    image:String,
    url:String,
    keyword:String,
    season: {
        type: Schema.Types.ObjectId,
        ref: 'Season',
        index: true
    }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('VideoGallery', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {
    findVideoForHomePage:function(data,callback){
        VideoGallery.find({
        }).sort({
            createdAt: -1
        }).limit(6).exec(function(err,data){
            if(err||_.isEmpty(data)){
                callback(err,"Nodata")
            }else{
                callback(null,data)
            }
        })
    },

    findAllVideos:function(data,callback){
        VideoGallery.find({
        }).exec(function(err,data){
            if(err||_.isEmpty(data)){
                callback(err,"Nodata")
            }else{
                callback(null,data)
            }
        })
    }
};
module.exports = _.assign(module.exports, exports, model);