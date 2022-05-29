import { Component, OnInit } from '@angular/core';
import {ImageService} from "../../../../controller/service/image.service";
import {Image} from "../../../../controller/model/image.model";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-image-admin',
  templateUrl: './image-admin.component.html',
  styleUrls: ['./image-admin.component.css']
})
export class ImageAdminComponent implements OnInit {

  private imagesBase64 = new Array<any>();

  constructor(private imageService: ImageService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    // this.findAll();
    this.getOne();
  }

  // var base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(arrayBuffer)));
  public getOne(){
    this.imageService.getOne().subscribe( data =>{
      console.log(data);
      let objectURL = 'data:image/jpeg;base64,' + data.picByte;
      this.image.picByte = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      },error => {
      console.log(error);
    });
  }

  public findAll(){
    this.imageService.findAll().subscribe( data => {
      console.log(data);
      this.images = data;
      this.selectedImages;
    },error => {
      console.log(error);
        });
  }

  get selectedImages(): Array<any>{
    this.images.forEach(e => {
      var to64 = btoa(String.fromCharCode.apply(null, new Uint8Array(e.picByte)));
      this.imagesBase64.push(to64);
    });
    console.log(this.imagesBase64);
    return this.imagesBase64;
  }

  // createImageFromBlob(image: Blob) {
  //   let reader = new FileReader();
  //   reader.addEventListener("load",
  //       () => {
  //         this.imageService.photo = reader.result;
  //       },
  //       false);
  //
  //   if (image) {
  //     if (image.type !== "application/pdf")
  //       reader.readAsDataURL(image);
  //   }
  // }

  get images(): Array<Image>{
    return this.imageService.images;
  }

  set images(value: Array<Image>){
    this.imageService.images = value;
  }

  get image(): Image {
    return  this.imageService.selectedImage;
  }

  set image(value: Image){
    this.imageService.selectedImage = value;
  }

}
