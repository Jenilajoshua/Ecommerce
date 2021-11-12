import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class prod{
  constructor(
    public id:number,
    public title:string,
    public description:string,
    public category:string,
    public rating:object

  ){}
}

@Component({
  selector: 'app-prod-body',
  templateUrl: './prod-body.component.html',
  styleUrls: ['./prod-body.component.css']
})
export class ProdBodyComponent implements OnInit {
  products:any=[];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  const localapi=localStorage.getItem('userapi');
  const localuser=localStorage.getItem('userdetails')
  if(localuser=="admin"){
    this.getprod();
  }
  }
  getprod(){
  this.http.get("https://fakestoreapi.com/products").subscribe(data => {
    // console.log(data);
    this.products = data;
  
  }) 
  }


}
