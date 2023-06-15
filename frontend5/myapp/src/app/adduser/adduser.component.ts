import { Component } from '@angular/core';
import {MyserviceService} from'../myservice.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
constructor (private service:MyserviceService){}
result:any;
newUser(n:any)
{
  this.service.addUser(n).subscribe((x:any)=>this.result=JSON.stringify(n))
}
}
