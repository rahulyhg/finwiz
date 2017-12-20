module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {

    generateExcel: function (req, res) {
        NominateComp.excelData(req.body, function (err, data) {
                Config.generateExcel("CompDetailExcel", data, function (excels) {
                    // console.log("excel", excels, "err", err);
                    res.set('Content-Type', "application/octet-stream");
                    res.set('Content-Disposition', "attachment;filename=" + excels.path);
                    res.send(excels.excel);
                });
            });
    },

    saveCompData: function (req, res) {
        if (req.body) {
            NominateComp.saveCompData(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            });
        }

    },
};
module.exports = _.assign(module.exports, controller);
