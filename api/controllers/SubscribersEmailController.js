module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
    saveEmailData: function (req, res) {
        if (req.body) {
            SubscribersEmail.saveEmailData(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            });
        }
    },

    generateExcel: function (req, res) {
        SubscribersEmail.excelData(req.body, function (err, data) {
                Config.generateExcel("SubcriberEmailExcel", data, function (excels) {
                    // console.log("excel", excels, "err", err);
                    res.set('Content-Type', "application/octet-stream");
                    res.set('Content-Disposition', "attachment;filename=" + excels.path);
                    res.send(excels.excel);
                });
            });
    },
};
module.exports = _.assign(module.exports, controller);
