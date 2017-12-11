var schema = new Schema({
   factText:String,
   order:Number
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('FunFacts', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {
    findAllFacts:function(data,callback){
        FunFacts.find({
        }).sort({
            order: 1
        }).exec(function(err,data){
            if(err||_.isEmpty(data)){
                callback(err,"Nodata")
            }else{
                callback(null,data)
            }
        })
    },
};
module.exports = _.assign(module.exports, exports, model);