var schema = new Schema({
    title: String,
    description: String,
    order: String,
    image: String,
    editions: {
        type: String,
        enum: ['Edition1', 'Edition2','Edition3']
    }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('NewsLetter', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {

    findDataBySeason:function(data,callback){
        NewsLetter.find({
            editions:data.edition
        }).sort({
            order: 1
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