module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {

    getAllArticlesData: function (req, res) {
        if (req.body) {
            Articles.getAllArticlesData(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            });
        }

    },

    findTop5Articles: function (req, res) {
        if (req.body) {
            Articles.findTop5Articles(req.body, res.callback);
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
