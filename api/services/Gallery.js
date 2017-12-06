var schema = new Schema({
  episodes:[{
    title:String,
    url:String,
    order:String,
    description:String
  }],
  photos:[{
      title:String,
      image:String,
      order:String,
      description:String
  }]
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Gallery', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);