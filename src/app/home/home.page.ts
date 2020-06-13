//home.page.ts
import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { File } from '@ionic-native/file/ngx';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  croppedImagepath = "";
  imagePath = "";
  hairImagePath = "";
  skinImagePath = "";
  isLoading = false;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };

  constructor(
    private camera: Camera,
    private crop: Crop,
    public actionSheetController: ActionSheetController,
    private file: File,
    public alertController: AlertController
  ) { }


  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      cameraDirection: 1
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      // let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.dontCropImage(imageData)
      this.imagePath = imageData;
    }, (err) => {
      // Handle error
    });
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }
  cropImageHair(){
    this.crop.crop(this.imagePath, { quality: 100 })
      .then(
        newPath => {
          this.showCroppedImageHair(newPath.split('?')[0])
        },
        error => {
          alert('Error cropping image' + error);
        }
      );
  }
  cropImageSkin(){
    this.crop.crop(this.imagePath, { quality: 100 })
      .then(
        newPath => {
          this.showCroppedImageSkin(newPath.split('?')[0])
        },
        error => {
          alert('Error cropping image' + error);
        }
      );
  }
  cropImage(fileUrl) {
    this.crop.crop(fileUrl, { quality: 100 })
      .then(
        newPath => {
          this.showCroppedImage(newPath.split('?')[0])
        },
        error => {
          alert('Error cropping image' + error);
        }
      );
  }
  dontCropImage(fileUrl) {
    this.showCroppedImage(fileUrl)
  }

  showCroppedImage(ImagePath) {
    this.isLoading = true;
    var copyPath = ImagePath;
    var splitPath = copyPath.split('/');
    var imageName = splitPath[splitPath.length - 1];
    var filePath = ImagePath.split(imageName)[0];

    this.file.readAsDataURL(filePath, imageName).then(base64 => {
      this.croppedImagepath = base64;
      this.isLoading = false;
    }, error => {
      alert('Error in showing image' + error);
      this.isLoading = false;
    });
  }
  showCroppedImageHair(ImagePath) {
    this.isLoading = true;
    var copyPath = ImagePath;
    var splitPath = copyPath.split('/');
    var imageName = splitPath[splitPath.length - 1];
    var filePath = ImagePath.split(imageName)[0];

    this.file.readAsDataURL(filePath, imageName).then(base64 => {
      this.hairImagePath = base64;
      this.isLoading = false;
    }, error => {
      alert('Error in showing image' + error);
      this.isLoading = false;
    });
  }
  
  async presentAlert() {
    var hair = this.hairImagePath;
    var skin = this.skinImagePath;
    var hairBytes = this.base64ToArrayBuffer(hair);
    var hairMean = 0;
    for(var i=0;i<hairBytes.length;i++)
    {
      hairMean += hairBytes[i];
    }
    hairMean = hairMean/hairBytes.length;
    var skinBytes = this.base64ToArrayBuffer(skin);
    var skinMean = 0;
    for(var i=0;i<skinBytes.length;i++)
    {
      skinMean += skinBytes[i];
    }
    skinMean = skinMean/skinBytes.length;
    var pointsDiff = Math.abs(hairMean - skinMean);
    var pointsPer = pointsDiff/skinMean;
    const alert = await this.alertController.create({

      header: 'Results',
      subHeader: 'These results are for fun only and do not necessarily represent a robust dagnostic of hair loss conditions',
      message: 'skin patch: '.concat(this.round_to_precision(skinMean,.5).toString()).concat('<br/>').concat('hair patch: ').concat(this.round_to_precision(hairMean,.5).toString()).concat('<br/>').concat('diff (|SP - HP|): '.concat(this.round_to_precision(pointsDiff,.5).toString())).concat('<br/>').concat('% diff 100*|SP-P|/SP: ').concat(this.round_to_precision(100*pointsPer,.5).toString()),
      buttons: ['OK'],
    });
  
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
    
  }
  round_to_precision(x, precision) {
    var y = +x + (precision === undefined ? 0.5 : precision/2);
    return y - (y % (precision === undefined ? 1 : +precision));
  } 
  showCroppedImageSkin(ImagePath) {
    this.isLoading = true;
    var copyPath = ImagePath;
    var splitPath = copyPath.split('/');
    var imageName = splitPath[splitPath.length - 1];
    var filePath = ImagePath.split(imageName)[0];

    this.file.readAsDataURL(filePath, imageName).then(base64 => {
      this.skinImagePath = base64;
      this.isLoading = false;
    }, error => {
      alert('Error in showing image' + error);
      this.isLoading = false;
    });
  }
  
  base64ToArrayBuffer(data) {
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
  
}



