var schema = new Schema({
    companyName: String,
    contactNumber: Number,
    designation: String,
    contactPerson: String,
    email: {
        type: String,
        validate: validators.isEmail(),
        unique: true
    },
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('NominateComp', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {

    excelData: function (data, callback) {
        NominateComp.find({}).exec(function (err, data) {
            if (err || _.isEmpty(data)) {
                callback(err, [])
            } else {
                async.concatSeries(data, function (mainData, callback) {
                    var obj = {};
                    obj["Company Name"] = mainData.companyName;
                    obj["Contact Number"] = mainData.contactNumber;
                    obj["Designation"] = mainData.designation;
                    obj["Contact Person"] = mainData.contactPerson;
                    obj["Email"] = mainData.email;                    
                    callback(null, obj);
                },
                function (err, singleData) {
                    callback(null, singleData);
                });
            }
        })
    }
};
module.exports = _.assign(module.exports, exports, model);