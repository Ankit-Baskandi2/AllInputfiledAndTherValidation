import { Component, OnInit } from '@angular/core';
import { ApiService } from '../registeration-form/api.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
 constructor(private test : ApiService) {}

 data : any;

 productSubscription?: Subscription

 productObserver = {
  next: (data : any) => { this.data = data },
  error: (error: any) => { console.log(error) },
  complete: () => { console.log('product stream completed ') }
}

  ngOnInit(): void {
    this.productSubscription = this.test.recievingData().subscribe(this.productObserver);  
  }

}
