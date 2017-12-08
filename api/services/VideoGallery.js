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
};
module.exports = _.assign(module.exports, exports, model);