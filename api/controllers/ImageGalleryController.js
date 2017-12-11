module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
    findImagesForHomePage: function (req, res) {
        if (req.body) {
            ImageGallery.findImagesForHomePage(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            });
        }
    },
    findAllImages: function (req, res) {
        if (req.body) {
            ImageGallery.findAllImages(req.body, res.callback);
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
