import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
 selector: 'app-cart',
 templateUrl: './cart.component.html',
 styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 items;
 checkoutForm;

 constructor(private cartService: CartService, private formBuilder: FormBuilder) {
         this.checkoutForm = this.formBuilder.group({
     name: '',
     address: '',
     postalCode: '',
     city: '',
     country: ''
   });
 }

 ngOnInit() {
         this.items = this.cartService.getItems();
 }


 onSubmit(customerData) {

   this.items = this.cartService.clearCart();
   this.checkoutForm.reset(alert("Thanks for your purchase " + customerData.name + "! We will send it to " + customerData.address + " in " + customerData.postalCode + " " + customerData.city + ", " + customerData.country));

 }

}