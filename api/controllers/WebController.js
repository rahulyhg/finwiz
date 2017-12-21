module.exports = {
    index: function (req, res) {
        res.metaView();
    },
    download: function (req, res) {
        Config.readUploaded(req.param("filename"), null, null, null, res);
    },
    backend: function (req, res) {
        var env = require("../../config/env/" + sails.config.environment + ".js");
        res.view("production/backend", {
            jsFiles: jsFilesBackend,
            title: "Backend",
            description: "Backend",
            keywords: "Backend",
            adminurl: env.realHost + "/api/",
        });
    },
    gitPull: function (req, res) {
        function gitPull() {
            exec('git pull', function (error, stdout, stderr) {
                if (error) {
                    return;
                }
                res.callback(error, {
                    stdout: stdout,
                    stderr: stderr
                });
            });
        }

        function decryptData(text) {
            if (text) {
                if (moment.unix(text).isBetween(moment().add(-1, "minute"), moment().add(1, "minute"))) {
                    gitPull();
                } else {
                    res.notFound();
                }
            } else {
                res.notFound();
            }
        }
        if (req.params && req.params.data) {
            decryptData(req.params.data);
        } else {
            res.notFound();
        }
    },

    articleData: function (req, res) {
        if (req.params) {
            var articleTitle = req.params[0];
            Articles.findOne({
                title: articleTitle
            }, function(err, data) {
                console.log("data----------",data);
                if (err) {
                    res.callback(err, data);
                } else if (_.isEmpty(data)) {
                    res.callback(err, data);
                } else {
                    var articleData = data;
                    res.metaView({
                        title: articleData.title,
                        description: 'this is an article',
                        image: articleData.articleImage
                    });
                }
            });
        } else {
            res.metaView();
        }
    },
    demo: function (req, res) {
        sails.renderView('email/welcome', {
            name: "Tushar",
            lastname: "Sachde",
            hobbies: ["cricket", "name", "email", "phone"]
        }, function (err, view) {
            res.send(view);
        });
    },

    news: function (req, res) {
        if (req.params && req.params[0]) {
            var newsID = req.params[0].split("/");

            News.findOne({
                "_id": newsID
            }).exec(function (err, news) {
                console.log("    $$$$    this is news ");
                console.log(news);
                if (err) {
                    res.callback(err, news);
                } else if (_.isEmpty(news)) {
                    res.callback(err, news);
                } else {
                    var text = htmlToText.fromString(news.text, {
                        wordwrap: 500
                    });
                    console.log("    8888888text ****     ");
                    console.log(text);
                    res.metaView({
                        title: news.title,
                        keywords: news.keywords,
                        description: text,
                        image: news.image
                    });
                }
            });

        } else {
            res.metaView();
        }
    },
    orderReturn: function (req, res) {
        async.waterfall([
            function (callback) { // order has to be refunded back
                async.parallel({
                    removeOrderFromUser: Order.removeOrder(req.body.order._id, callback),
                    addUserBalance: User.addBalance(req.body.order.amount)
                }, callback);
            },
            function (callback) { // product quanity has to be added
                Product.modifyQuantity(req.body.order.product._id, req.body.order.product.quantity);
            }
        ], callback);
    }
};