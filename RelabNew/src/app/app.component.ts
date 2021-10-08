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
  circleOptions2 : any;
  markerOptions: google.maps.MarkerOptions;
  vertices: google.maps.LatLngLiteral[];
  rettangolo: google.maps.LatLngLiteral[];
 
  constructor()
  {
    this.center={lat: 45.506738, lng: 9.190766};
    this.position = this.center;
    this.label = "ciao";
    this.circleOptions = {fillColor : 'red'}
    this.circleOptions1 = {fillColor : 'Blue'}
    this.circleOptions2 = {fillColor : 'Green'}
    this.vertices = [
      {  lat: this.center.lat + 0.001, lng: this.center.lng - 0.002 },
      {  lat: this.center.lat, lng: this.center.lng },
      {  lat: this.center.lat - 0.001, lng: this.center.lng - 0.002}
          ]  ;
          this.rettangolo = [
            {  lat: this.center.lat + 0.001, lng: this.center.lng  },
            {  lat: this.center.lat + 0.001, lng: this.center.lng + 0.001},
            {  lat: this.center.lat - 0.001, lng: this.center.lng + 0.001},
            {  lat: this.center.lat - 0.001, lng: this.center.lng }
            
            
            
                ]  ;


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
  Blue()
  {this.circleOptions2 = {fillColor : 'Blue'}}
  Purple()
  {this.circleOptions2 = {fillColor : 'Purple'}}
  Grey()
  {this.circleOptions2 = {fillColor : 'Grey'}}
 
  
}
