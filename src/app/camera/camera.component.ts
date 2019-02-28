import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CameraDataService } from '../camera-data.service';

interface Camera {
  id: any,
  location: any
}
@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
  imageURL: "";
  camNum = [1, 2, 3, 4];
  cam1: Camera = {
    id: 1,
    location: { lat: 37.7397, lng: -121.4252 }
  }
  cam2: Camera = {
    id: 2,
    location: { lat: 37.1397, lng: -121.2252 }
  } 
  cam3: Camera = {
    id: 3,
    location: { lat: 37.9397, lng: -121.8252 }
  }

  camArray: Array<Camera> = [this.cam1, this.cam2, this.cam3];

  imageForm = new FormGroup({
    imageURL: new FormControl(),
    selectedCam: new FormControl()
  })


  constructor(private camService: CameraDataService) { 
    console.log(this.camService.url)
  }

  ngOnInit() {
  }

  onSubmit() {
    let selectedCam: Camera;
    for (var i = 0; i < this.camArray.length; i++) {
      if (this.imageForm.controls.selectedCam.value == this.camArray[i].id) {
        selectedCam = this.camArray[i];
        break;
      }
    }
    this.camService.camData.imageURL = this.imageForm.controls.imageURL.value;
    this.camService.camData.selectedCam = selectedCam;
    console.log(selectedCam)
  }
}
