module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
    findVideoForHomePage: function (req, res) {
        if (req.body) {
            VideoGallery.findVideoForHomePage(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            });
        }

    },
    findAllVideos: function (req, res) {
        if (req.body) {
            VideoGallery.findAllVideos(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            });
        }
    },

    searchVideo: function (req, res) {
        if (req.body) {
            VideoGallery.searchVideo(req.body, res.callback);
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