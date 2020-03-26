import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

//contact Form
	contactForm = new FormGroup({
		name: new FormControl(""),
		phone: new FormControl(""),
		email: new FormControl(""),
		img: new FormControl(""),
		comment: new FormControl("")

	});

  constructor() { }

  ngOnInit(): void {
  }

//function, that inserts a new testimonial card
 contactFunction(){
 	var userInfo: any = this.contactForm.value;
 	var a = 
	`<div class="cd-testimonials-wrapper cd-container border-top border-light">
		  <ul class="cd-testimonials">
		    <li>
		      <p>${userInfo.comment}</p>
		      <div class="cd-author">
		        <img src="${userInfo.img}" alt="Author image">
		        <ul class="cd-author-info">
		          <li>${userInfo.name}</li>
		        </ul>
		      </div>
		    </li>
		  </ul>
		</div>
	`
 	;
 	document.getElementById('testimon').innerHTML += a;
 	console.log(userInfo);
 	(document.getElementById("myForm") as HTMLFormElement).reset();
 }

}
