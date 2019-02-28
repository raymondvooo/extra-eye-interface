import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CameraDataService } from '../camera-data.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
  imageURL: "";
  camNum = [1, 2, 3, 4];
  selectedCam: any = {};
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
    this.camService.camData.imageURL = this.imageForm.controls.imageURL.value;
    this.camService.camData.selectedCam = this.imageForm.value.selectedCam;
  }
}
