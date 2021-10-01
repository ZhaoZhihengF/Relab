import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server mappe';
  //Aggiungiamo latitudine e longitudine di un luogo
  center : any;
  position : any;
  label :string;
  circleOptions : any;
  circleOptions1 : any;
  markerOptions: google.maps.MarkerOptions;
 
  constructor()
  {
    this.center={lat: 45.506738, lng: 9.190766};
    this.position = this.center;
    this.label = "ciao";
    this.circleOptions = {fillColor : 'red'}
    this.circleOptions1 = {fillColor : 'Blue'}
    let iconData : google.maps.Icon = 
      {
      url:'./assets/img/cat_acrobat.ico',
      scaledSize : new google.maps.Size(60,60)
      }
    this.markerOptions = {icon:iconData}
  }
  Red()
  {this.circleOptions1 = {fillColor : 'Red'}}
  Yellow()
  {this.circleOptions1 = {fillColor : 'Yellow'}}
  Green()
  {this.circleOptions1 = {fillColor : 'Green'}}
}
