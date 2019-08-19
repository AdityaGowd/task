import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data;
  set;
  constructor(private a:HttpClient){
    
  }
  ngOnInit(){
   this.a.get("http://localhost:3000/data").subscribe(res=>this.data=res)
  }
  button(id){
    this.a.get("http://localhost:3000/data/?author="+id).subscribe(res=>this.set=res)
  }
}
// this.a.get("http://localhost:3000/data/"+id).subscribe(res=>this.set=res) for id .