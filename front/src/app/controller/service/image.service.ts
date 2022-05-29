import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Image} from "../model/image.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private API = environment.adminUrl + 'image';

  private _images: Array<Image>;
  private _selectedImage: Image;
  private _image: Image;

  constructor(private http: HttpClient) { }

  public save(){
    // const headers = new HttpHeaders({"Content-Type": "multipart/form-data"})
    let config =  {headers: new  HttpHeaders({ 'Content-Type': 'multipart/form-data'})};
    let formData = new FormData();
    // @ts-ignore
    formData.append("file",this.selectedImage);
    return this.http.post(this.API + '/', formData, config);
  }

  public findAll(){
   return this.http.get<Array<Image>>(this.API + '/');
  }

  public getOne(){
    return this.http.get<Image>( this.API + '/Screenshotfrom2022-05-2322-17-01png')
  }

  get images(): Array<Image> {
    if (this._images == null) {
      this._images = new Array<Image>();
    }
    return this._images;
  }

  set images(value: Array<Image>) {
    this._images = value;
  }


  get selectedImage(): Image {
    if (this._selectedImage == null) {
      this._selectedImage =new Image();
    }
    return this._selectedImage;
  }

  set selectedImage(value: Image) {
    this._selectedImage = value;
  }

  get image(): Image {
    if (this._image == null) {
      this._image =new Image();
    }
    return this._image;
  }

  set image(value: Image) {
    this._image = value;
  }
}
