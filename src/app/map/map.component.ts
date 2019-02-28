import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';

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

  public constructor() { }

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
