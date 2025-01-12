import { Component } from '@angular/core';
import { MyTestServiceService } from '../my-test-service.service';
@Component({
  selector: 'app-my-test-component',
  templateUrl: './my-test-component.component.html',
  styleUrl: './my-test-component.component.css'
})
export class MyTestComponentComponent {
  constructor(private apiService: MyTestServiceService) { }

}
