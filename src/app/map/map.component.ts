import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { CameraDataService } from '../camera-data.service';
import { Subscription } from 'rxjs';


declare var H: any;


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @ViewChild("map")
  private mapElement: ElementRef;

  private platform: any;
  private map: any;
  location: any = {};
  subscription: Subscription;
  svgMarkup: string = '<svg width="24" height="24" ' +
    'xmlns="http://www.w3.org/2000/svg">' +
    '<rect stroke="white" fill="red" x="1" y="1" width="24" ' +
    'height="22" /><text x="12" y="20" font-size="16pt" ' +
    'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
    'fill="white">!</text></svg>';

  public constructor(private camService: CameraDataService) {
    this.subscription = camService.camera.subscribe((value) => {
      this.location = value;
      console.log("LOCATION", this.location)
      let icon = new H.map.Icon(this.svgMarkup),
        coords = this.location,
        marker = new H.map.Marker(coords, { icon: icon });
        this.map.addObject(marker);
      this.map.setCenter(this.location)
    });
  }

  public ngOnInit() {
    this.platform = new H.service.Platform({
      "app_id": "2tooHTKeJvoT3AxFx5V4",
      "app_code": "rY4fH0rv8HKph3erWIgbtw"
    });
  }
  public ngAfterViewInit() {
    let defaultLayers = this.platform.createDefaultLayers();
    this.map = new H.Map(
      this.mapElement.nativeElement,
      defaultLayers.normal.map,
      {
        zoom: 10,
        center: { lat: 37.7397, lng: -121.4252 }
      }
    );
    let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
  }
}
