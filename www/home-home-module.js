(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>\nBalder-Dash\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content padding text-center>\n \n  <ion-grid>\n\n    <ion-row >\n      <ion-button (click)=\"selectImage()\">\n        Pick Image \n      </ion-button>\n    </ion-row>\n\n   <ion-row>\n    <ion-button color=\"success\" (click)=\"cropImageHair()\">\n      Select Hair Region\n    </ion-button>\n   </ion-row>\n\n    <ion-row>\n      <ion-button color=\"danger\" (click)=\"cropImageSkin()\">\n        Select Skin Region\n      </ion-button>\n    </ion-row>\n\n    <ion-row>\n      <ion-button color=\"warning\" (click)=\"presentAlert()\">\n        Analyze\n      </ion-button>\n    </ion-row>\n\n  </ion-grid>\n \n<ion-grid>\n\n  <ion-row>\n    <ion-col>\n      Cropped Hair Picture\n    </ion-col>\n    <ion-col>\n      Cropped Skin Picture\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <img [src]=\"hairImagePath\" />  \n    </ion-col>\n    <ion-col>\n      <img [src]=\"skinImagePath\" />  \n    </ion-col>\n  </ion-row>\n  \n  </ion-grid>\n  <h5 *ngIf=\"croppedImagepath.length\">Image</h5>\n \n  <p *ngIf=\"isLoading\">Loading ...</p>\n \n  <img [src]=\"croppedImagepath\" />\n\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-container {\n  min-height: 200px;\n  background-size: cover; }\n\n@media (min-width: 0px) {\n  .images {\n    -moz-column-count: 2;\n         column-count: 2; } }\n\n@media (min-width: 420px) {\n  .images {\n    -moz-column-count: 3;\n         column-count: 3; } }\n\n@media (min-width: 720px) {\n  .images {\n    -moz-column-count: 4;\n         column-count: 4; } }\n\n.one-image {\n  margin: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXExhYlxcRG9jdW1lbnRzXFxCYWxkQ2hlY2tlci9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0U7SUFDRSxvQkFBZTtTQUFmLGVBQWUsRUFBQSxFQUNoQjs7QUFHSDtFQUNFO0lBQ0Usb0JBQWU7U0FBZixlQUFlLEVBQUEsRUFDaEI7O0FBR0g7RUFDRTtJQUNFLG9CQUFlO1NBQWYsZUFBZSxFQUFBLEVBQ2hCOztBQUdIO0VBQ0UsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZS1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbiBcbkBtZWRpYSAobWluLXdpZHRoOiAwcHgpIHtcbiAgLmltYWdlcyB7XG4gICAgY29sdW1uLWNvdW50OiAyO1xuICB9XG59XG4gXG5AbWVkaWEgKG1pbi13aWR0aDogNDIwcHgpIHtcbiAgLmltYWdlcyB7XG4gICAgY29sdW1uLWNvdW50OiAzO1xuICB9XG59XG4gXG5AbWVkaWEgKG1pbi13aWR0aDogNzIwcHgpIHtcbiAgLmltYWdlcyB7XG4gICAgY29sdW1uLWNvdW50OiA0O1xuICB9XG59XG4gXG4ub25lLWltYWdlIHtcbiAgbWFyZ2luOiAycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/ngx/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");

//home.page.ts






var HomePage = /** @class */ (function () {
    function HomePage(camera, crop, actionSheetController, file, alertController) {
        this.camera = camera;
        this.crop = crop;
        this.actionSheetController = actionSheetController;
        this.file = file;
        this.alertController = alertController;
        this.croppedImagepath = "";
        this.imagePath = "";
        this.hairImagePath = "";
        this.skinImagePath = "";
        this.isLoading = false;
        this.imagePickerOptions = {
            maximumImagesCount: 1,
            quality: 50
        };
    }
    HomePage.prototype.pickImage = function (sourceType) {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            cameraDirection: 1
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            // let base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.dontCropImage(imageData);
            _this.imagePath = imageData;
        }, function (err) {
            // Handle error
        });
    };
    HomePage.prototype.selectImage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: "Select Image source",
                            buttons: [{
                                    text: 'Load from Library',
                                    handler: function () {
                                        _this.pickImage(_this.camera.PictureSourceType.PHOTOLIBRARY);
                                    }
                                },
                                {
                                    text: 'Use Camera',
                                    handler: function () {
                                        _this.pickImage(_this.camera.PictureSourceType.CAMERA);
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.cropImageHair = function () {
        var _this = this;
        this.crop.crop(this.imagePath, { quality: 100 })
            .then(function (newPath) {
            _this.showCroppedImageHair(newPath.split('?')[0]);
        }, function (error) {
            alert('Error cropping image' + error);
        });
    };
    HomePage.prototype.cropImageSkin = function () {
        var _this = this;
        this.crop.crop(this.imagePath, { quality: 100 })
            .then(function (newPath) {
            _this.showCroppedImageSkin(newPath.split('?')[0]);
        }, function (error) {
            alert('Error cropping image' + error);
        });
    };
    HomePage.prototype.cropImage = function (fileUrl) {
        var _this = this;
        this.crop.crop(fileUrl, { quality: 100 })
            .then(function (newPath) {
            _this.showCroppedImage(newPath.split('?')[0]);
        }, function (error) {
            alert('Error cropping image' + error);
        });
    };
    HomePage.prototype.dontCropImage = function (fileUrl) {
        this.showCroppedImage(fileUrl);
    };
    HomePage.prototype.showCroppedImage = function (ImagePath) {
        var _this = this;
        this.isLoading = true;
        var copyPath = ImagePath;
        var splitPath = copyPath.split('/');
        var imageName = splitPath[splitPath.length - 1];
        var filePath = ImagePath.split(imageName)[0];
        this.file.readAsDataURL(filePath, imageName).then(function (base64) {
            _this.croppedImagepath = base64;
            _this.isLoading = false;
        }, function (error) {
            alert('Error in showing image' + error);
            _this.isLoading = false;
        });
    };
    HomePage.prototype.showCroppedImageHair = function (ImagePath) {
        var _this = this;
        this.isLoading = true;
        var copyPath = ImagePath;
        var splitPath = copyPath.split('/');
        var imageName = splitPath[splitPath.length - 1];
        var filePath = ImagePath.split(imageName)[0];
        this.file.readAsDataURL(filePath, imageName).then(function (base64) {
            _this.hairImagePath = base64;
            _this.isLoading = false;
        }, function (error) {
            alert('Error in showing image' + error);
            _this.isLoading = false;
        });
    };
    HomePage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var hair, skin, hairBytes, hairMean, i, skinBytes, skinMean, i, pointsDiff, pointsPer, alert, result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hair = this.hairImagePath;
                        skin = this.skinImagePath;
                        hairBytes = this.base64ToArrayBuffer(hair);
                        hairMean = 0;
                        for (i = 0; i < hairBytes.length; i++) {
                            hairMean += hairBytes[i];
                        }
                        hairMean = hairMean / hairBytes.length;
                        skinBytes = this.base64ToArrayBuffer(skin);
                        skinMean = 0;
                        for (i = 0; i < skinBytes.length; i++) {
                            skinMean += skinBytes[i];
                        }
                        skinMean = skinMean / skinBytes.length;
                        pointsDiff = Math.abs(hairMean - skinMean);
                        pointsPer = pointsDiff / skinMean;
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Results',
                                subHeader: 'These results are for fun only and do not necessarily represent a robust dagnostic of hair loss conditions',
                                message: 'skin patch: '.concat(this.round_to_precision(skinMean, .5).toString()).concat('<br/>').concat('hair patch: ').concat(this.round_to_precision(hairMean, .5).toString()).concat('<br/>').concat('diff (|SP - HP|): '.concat(this.round_to_precision(pointsDiff, .5).toString())).concat('<br/>').concat('% diff 100*|SP-P|/SP: ').concat(this.round_to_precision(100 * pointsPer, .5).toString()),
                                buttons: ['OK'],
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, alert.onDidDismiss()];
                    case 3:
                        result = _a.sent();
                        console.log(result);
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.round_to_precision = function (x, precision) {
        var y = +x + (precision === undefined ? 0.5 : precision / 2);
        return y - (y % (precision === undefined ? 1 : +precision));
    };
    HomePage.prototype.showCroppedImageSkin = function (ImagePath) {
        var _this = this;
        this.isLoading = true;
        var copyPath = ImagePath;
        var splitPath = copyPath.split('/');
        var imageName = splitPath[splitPath.length - 1];
        var filePath = ImagePath.split(imageName)[0];
        this.file.readAsDataURL(filePath, imageName).then(function (base64) {
            _this.skinImagePath = base64;
            _this.isLoading = false;
        }, function (error) {
            alert('Error in showing image' + error);
            _this.isLoading = false;
        });
    };
    HomePage.prototype.base64ToArrayBuffer = function (data) {
        var input = data.substring(data.indexOf(',') + 1);
        var binaryString = window.atob(input);
        var binaryLen = binaryString.length;
        var bytes = new Uint8Array(binaryLen);
        for (var i = 0; i < binaryLen; i++) {
            var ascii = binaryString.charCodeAt(i);
            bytes[i] = ascii;
        }
        return bytes;
    };
    ;
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"],
            _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_3__["Crop"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map