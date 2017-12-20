var schema = new Schema({
    email: {
        type: String,
        validate: validators.isEmail(),
        unique: true
    },});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('SubscribersEmail', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {
    
    saveEmailData: function (data, callback) {
        async.waterfall([
            function (callback) {
                SubscribersEmail.saveData(data, function (err, data1) {
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
                emailData.email = "Nsefinwiz@gmail.com";
                emailData.emailData = saveData.email;                
                emailData.filename = "subscribe.ejs";
                emailData.subject = "Subscribers Mail";
                Config.email(emailData, function (err, emailRespo) {
                    if (err) {
                        console.log(err);
                        callback(err);
                    } else if (emailRespo) {
                        callback(null, saveData);
                    } else {
                        callback(null, saveData);
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

    excelData: function (data, callback) {
        SubscribersEmail.find({}).exec(function (err, data) {
            if (err || _.isEmpty(data)) {
                callback(err, [])
            } else {
                var i=1;
                async.concatSeries(data, function (mainData, callback) {
                    var obj = {};
                    obj["Serial No"]=i++;
                    obj["Email"] = mainData.email;                 
                    callback(null, obj);
                },
                function (err, singleData) {
                    callback(null, singleData);
                });
            }
        })
    },
};
module.exports = _.assign(module.exports, exports, model);