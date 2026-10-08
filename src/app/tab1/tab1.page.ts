import { Component } from '@angular/core';
import {  
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonCard, 
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonList, 
  IonItem, 
  IonIcon, 
  IonLabel,
  IonAvatar } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';


// importar los iconos
// 1. Importar addIcons y los iconos específicos desde ionicons
import { addIcons } from 'ionicons';
import { mailOutline, callOutline, locationOutline, calendarOutline, carOutline } from 'ionicons/icons';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonCard, 
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonList, 
    IonItem, 
    IonIcon, 
    IonLabel,
    IonAvatar,
    ExploreContainerComponent],
})
export class Tab1Page {
  constructor() {
    addIcons({ mailOutline, callOutline, locationOutline, calendarOutline, carOutline });
  }
}
