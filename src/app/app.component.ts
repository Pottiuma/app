import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my_project';
  constructor(){}
    array:any =[
      {
        Name: "Uma",
        id:"1001",
        favcolor:"white",
        favhero:"PSPK",
        favnumber:"9"
      },
      {
        Name: "Naga",
        id:"1003",
        favcolor:"red",
        favhero:"arjun",
        favnumber:"2"
        
      },
      {
        Name: "Mamatha",
        id:"1003",
        favcolor:"yellow",
        favhero:"Surya",
        favnumber:"4"
      },
      {
        Name: "Mahi",
        id:"1004",
        favcolor:"blue",
        favhero:"NTR",
        favnumber:"3"
      }
    ];
    tabKey:any=[];
    tabValue:any=[];
    getData(){
      this.array.forEach((element:any)=>{
        this.tabKey=Object.keys(element);
        this.tabValue.push(Object.values(element));
      });
      }
    }


    
  

