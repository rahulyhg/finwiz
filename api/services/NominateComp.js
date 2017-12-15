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
    },

    saveCompData: function (data, callback) {
        async.waterfall([
            function (callback) {
                NominateComp.saveData(data, function (err, data1) {
                    if (err) {
                        console.log(err);
                        callback(err, null);
                    } else {
                        if (_.isEmpty(data1)) {
                            callback(err, null);
                        } else {
                            callback(null, data1);
                        }
                    }
                });
            },
            function (saveData, callback) {
                var emailData = {};
                emailData.from = "Nsefinwiz@gmail.com";
                emailData.companyName = saveData.companyName;
                emailData.contactPerson = saveData.contactPerson;
                emailData.designation =saveData.designation;
                emailData.contactNumber = saveData.contactNumber;
                emailData.emailData = saveData.email;
                emailData.email = "Nsefinwiz@gmail.com";                
                emailData.filename = "nomination.ejs";
                emailData.subject = "Nominate Comp";
                Config.email(emailData, function (err, emailRespo) {
                    if (err) {
                        console.log(err);
                        callback(err);
                    } else if (emailRespo) {
                        callback(null, saveData);
                    } else {
                        callback(null, saveDatass);
                    }
                });  
            }
        ],
        function (err, found) {
            if (err) {
                // console.log(err);
                callback(err, null);
            } else {
                callback(null, found);
            }
        });
    },
};
module.exports = _.assign(module.exports, exports, model);