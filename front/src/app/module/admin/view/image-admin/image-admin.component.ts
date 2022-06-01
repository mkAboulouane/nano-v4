import { Component, OnInit } from '@angular/core';
import {ImageService} from "../../../../controller/service/image.service";
import {Image} from "../../../../controller/model/image.model";
import {DomSanitizer} from "@angular/platform-browser";
import {HttpClient, HttpHeaders, HttpRequest} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {Observable} from "rxjs";
import {error} from "protractor";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-image-admin',
  templateUrl: './image-admin.component.html',
  styleUrls: ['./image-admin.component.css']
})
export class ImageAdminComponent implements OnInit {


  file: File;
  postResponse: any;
  successResponse: string;

  private API = environment.adminUrl + 'image/';

  constructor(private imageService: ImageService, private sanitizer: DomSanitizer, private http: HttpClient) { }

  ngOnInit(): void {
    // this.findAll();
    this.getOne();
  }


   onImageUpload(event) {
    this.file = event.target.files[0];
  }


  imageUploadAction() {
    const file = new FormData();
    file.append('file', this.file, this.file.name);
    this.http.post<any>(this.API , file, { observe: 'response' })
        .subscribe((response) => {
          console.log(response);
          if (response.status === 200) {
                this.postResponse = response;
                this.successResponse = this.postResponse.body.message;
              } else {
                this.successResponse = 'Image not uploaded due to some error!';
              }
            }
        );
  }

  // viewImage() {
  //   this.http.get('http://localhost:8080/get/image/info/' + this.image)
  //       .subscribe(
  //           res => {
  //             this.postResponse = res;
  //             this.dbImage = 'data:image/jpeg;base64,' + this.postResponse.image;
  //           }
  //       );
  // }


  public getOne() {
    this.imageService.getOne().subscribe( data =>{
      console.log(data);
      let objectURL = 'data:image/jpeg;base64,' + data.picByte;
      this.image.picByte = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      },error => {
      console.log(error);
    });
  }


  get image(): Image {
    return  this.imageService.selectedImage;
  }

  set image(value: Image){
    this.imageService.selectedImage = value;
  }

}
