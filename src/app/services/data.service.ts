import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public data;

  public homeCategory = 'Home Furniture';
  public livingRoomSubCategory = 'Living Room';
  public bedroomSubCategory = 'Bedroom';
  public kitchenSubCategory = 'Kitchen & Dining';
  public porchSubCategory = 'Porch & Shed';


  public officeCategory = 'Office Furniture';
  public boardroomSubCategory = 'Boardroom';
  public cubicleSubCategory = 'Cubicle';
  public storageSubCategory = 'Storage';

  public generalCategory = 'General Furniture';
  public chairSubCategory = 'Chairs';
  public deskSubCategory = 'Desks';
  public tablesSubCategory = 'Tables';

  public livingRoomIcon = 'https://img.icons8.com/dusk/64/000000/sofa.png';
  public bedroomIcon = 'https://img.icons8.com/officel/64/000000/bedroom.png';
  public kitchenIcon = 'https://img.icons8.com/dusk/64/000000/table.png';
  public porchIcon = 'https://img.icons8.com/cotton/64/000000/furniture-store.png';

  public boardroomIcon = 'https://img.icons8.com/officel/80/000000/meeting-room.png';
  public cubicleIcon = 'https://img.icons8.com/officel/80/000000/room.png';
  public storageIcon = 'https://img.icons8.com/dusk/80/000000/wardrobe.png';

  public chairIcon = 'https://img.icons8.com/offices/80/000000/theatre-seat.png';
  public deskIcon = 'https://img.icons8.com/doodle/80/000000/desk.png';
  public tableIcon = 'https://img.icons8.com/officel/80/000000/table.png';

  

  constructor() {
    this.getProducts();
   }

  public getProducts() { 
  


    fetch('assets/data/data.json').then(async res => {
      this.data = await res.json();
      console.log(this.data);
    });
}
}
