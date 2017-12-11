var schema = new Schema({
    image:[String],
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
module.exports = mongoose.model('ImageGallery', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {
    findImagesForHomePage:function(data,callback){
        ImageGallery.find({
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

    findAllImages:function(data,callback){
        ImageGallery.find({
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