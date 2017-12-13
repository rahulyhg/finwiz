var schema = new Schema({
    name:String,
    designation:String,
    description:String,
    order:Number
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Testimonials', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {

    getAllTestimonials: function (data, callback) {
        Testimonials.find({}).sort({
            order: 1
        }).exec(function (err, data) {
            if (err || _.isEmpty(data)) {
                callback(err, [])
            } else {
                callback(null, data)
            }
        })
    },
};
module.exports = _.assign(module.exports, exports, model);