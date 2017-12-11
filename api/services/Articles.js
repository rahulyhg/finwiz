var schema = new Schema({
title:String,
articleImage:String,
discription:String,
order:Number
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Articles', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {

    getAllArticlesData:function(data,callback){
        Articles.find({}).sort({
            order: 1
        }).limit(1).exec(function(err,data){
            if(err||_.isEmpty(data)){
                callback(err,[])
            }else{
                callback(null,data)
            }
        })
    },

    findTop5Articles:function(data,callback){
        Articles.find({
        }).sort({
            createdAt: -1
        }).limit(5).exec(function(err,data){
            if(err||_.isEmpty(data)){
                callback(err,"Nodata")
            }else{
                callback(null,data)
            }
        })
    },
};
module.exports = _.assign(module.exports, exports, model);