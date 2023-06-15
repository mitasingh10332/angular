import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css']
})
export class ShowuserComponent {

  constructor(private service:MyserviceService)

  {}
  data:any;
  getData(){
    this.service.show().subscribe((n:any)=>this.data=n);
  }
}