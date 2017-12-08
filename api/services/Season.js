var schema = new Schema({
    name:String,
    order:Number
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Season', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {
    getAllData:function(data,callback){
        Season.find({},function(err,data){
            if(_.isEmpty(data)||err){
                callback(err,[])
            }else{
                callback(null,data)
            }
        })
    }
};
module.exports = _.assign(module.exports, exports, model);