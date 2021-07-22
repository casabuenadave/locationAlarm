import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public form =
  {
    email_address: "",
    password: ""
  }
  ngOInit() {
    
  }
 
print()
  {
  console.log(this.form)
  }
}
