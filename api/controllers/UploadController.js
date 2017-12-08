/**
 * UploadController
 *
 * @description :: Server-side logic for managing uploads
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    index: function (req, res) {
        var fileNames = [];
        req.file("file").upload({
            maxBytes: 10485760 // 10 MB Storage 1 MB = 10^6
        }, function (err, uploadedFile) {
            //console.log(err);
            //console.log(uploadedFile);
            if (err) {
                res.callback(err);
            } else if (uploadedFile && uploadedFile.length > 0) {
                async.concat(uploadedFile, function (n, callback) {
                    Config.uploadFile(n.fd, function (err, value) {
                        if (err) {
                            callback(err);
                        } else {
                            callback(null, value.name);
                        }
                    });
                }, res.callback);
            } else {
                res.callback(null, {
                    value: false,
                    data: "No files selected"
                });
            }
        });
    },
    modifyImage: function (filename, width, height, style, callback) {
        var readstream = gfs.createReadStream({
            filename: filename
        });
        readstream.on('error', function (err) {
            res.json({
                value: false,
                error: err
            });
        });
        var buf;
        var newNameExtire;
        var bufs = [];
        var proceedI = 0;
        var wi;
        var he;
        readstream.on('data', function (d) {
            bufs.push(d);
        });
        readstream.on('end', function () {
            buf = Buffer.concat(bufs);
            proceed();
        });


        function proceed() {
            proceedI++;
            if (proceedI === 2) {
                Jimp.read(buf, function (err, image) {
                    if (err) {
                        res.callback(err, null);
                    } else {
                        if (style === "contain" && width && height) {
                            image.contain(width, height).getBuffer(Jimp.AUTO, writer2);
                        } else if (style === "cover" && (width && width > 0) && (height && height > 0)) {
                            image.cover(width, height).getBuffer(Jimp.AUTO, writer2);
                        } else if ((width && width > 0) && (height && height > 0)) {
                            image.resize(width, height).getBuffer(Jimp.AUTO, writer2);
                        } else if ((width && width > 0) && !(height && height > 0)) {
                            image.resize(width, Jimp.AUTO).getBuffer(Jimp.AUTO, writer2);
                        } else {
                            image.resize(Jimp.AUTO, height).getBuffer(Jimp.AUTO, writer2);
                        }
                    }
                });
            }
        }

        function writer2(err, imageBuf) {
            var writestream2 = gfs.createWriteStream({
                filename: newNameExtire,
            });
            var bufferStream = new stream.PassThrough();
            bufferStream.end(imageBuf);
            bufferStream.pipe(writestream2);
            res.send(imageBuf);
        }

        function read2(filename2) {
            var readstream2 = gfs.createReadStream({
                filename: filename2
            });
            readstream2.on('error', function (err) {
                res.json({
                    value: false,
                    error: err
                });
            });
            readstream2.pipe(res);
        }
        var onlyName = filename.split(".")[0];
        var extension = filename.split(".").pop();
        if ((extension == "jpg" || extension == "png" || extension == "gif") && ((width && width > 0) || (height && height > 0))) {
            //attempt to get same size image and serve
            var newName = onlyName;
            if (width > 0) {
                newName += "-" + width;
            } else {
                newName += "-" + 0;
            }
            if (height) {
                newName += "-" + height;
            } else {
                newName += "-" + 0;
            }
            if (style && (style == "contain" || style == "cover")) {
                newName += "-" + style;
            } else {
                newName += "-" + 0;
            }
            newNameExtire = newName + "." + extension;
            gfs.exist({
                filename: newNameExtire
            }, function (err, found) {
                if (err) {
                    res.json({
                        value: false,
                        error: err
                    });
                }
                if (found) {
                    read2(newNameExtire);
                } else {
                    proceed();
                }
            });
            //else create a resized image and serve
        } else {
            readstream.pipe(res);
        }
        //error handling, e.g. file does not exist
    },
    readFile: function (req, res) {
        if (req.query.file) {
            var width;
            var height;
            if (req.query.width) {
                width = parseInt(req.query.width);
                if (_.isNaN(width)) {
                    width = undefined;
                }
            }
            if (req.query.height) {
                height = parseInt(req.query.height);
                if (_.isNaN(height)) {
                    height = undefined;
                }
            }
            Config.readUploaded(req.query.file, width, height, req.query.style, res);
        } else {
            res.callback("No Such File Found");
        }

    },
    wallpaper: function (req, res) {
        // Config.readUploaded(req.query.file, req.query.width, req.query.height, req.query.style, res);
        return res.redirect("https://storage.googleapis.com/" + storageBucket + "/" + req.query.file);
    }
};