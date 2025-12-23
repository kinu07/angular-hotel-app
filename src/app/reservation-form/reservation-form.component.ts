import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../model/reservation';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});
  constructor( private reservationService : ReservationService, 
               private formBuilder: FormBuilder ){

  }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate :['', Validators.required],
      checkOutDate :['', Validators.required],
      guestName :['', Validators.required],
      guestEmail :['', [Validators.required, Validators.email]],
      roomNumber :['', Validators.required]
    })

  }

  onSubmit(){
    let reservation : Reservation = this.reservationForm.value;
    this.reservationService.addReservation(reservation)
  }

}
