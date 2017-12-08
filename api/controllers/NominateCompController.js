module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {

    generateExcel: function (req, res) {
        NominateComp.excelData(req.body, function (err, data) {
                Config.generateExcel("CadExcel", data, function (excels) {
                    // console.log("excel", excels, "err", err);
                    res.set('Content-Type', "application/octet-stream");
                    res.set('Content-Disposition', "attachment;filename=" + excels.path);
                    res.send(excels.excel);
                });
            });
    },
};
module.exports = _.assign(module.exports, controller);
