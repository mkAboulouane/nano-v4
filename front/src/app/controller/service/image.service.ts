import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Image} from "../model/image.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private API = environment.adminUrl + 'image';

  private _images: Array<Image>;
  private _selectedImage: Image;

  constructor(private http: HttpClient) { }

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
}
