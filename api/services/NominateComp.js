var schema = new Schema({
 companyName:String,
 contactNumber:Number,
 designation:String,
 contactPerson:Number,
 email: {
    type: String,
    validate: validators.isEmail(),
    unique: true
},});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('NominateComp', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);