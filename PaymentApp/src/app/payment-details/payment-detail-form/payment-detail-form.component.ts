import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { NgForm } from '@angular/forms';
// import 'rxjs/add/operator/map';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [
  ]
})
export class PaymentDetailFormComponent implements OnInit {

  constructor(public service:PaymentDetailService,  
    public toastr:ToastrService) {}
  

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.service.postPaymentDetail().subscribe(
      (res: any) => {
        this.resetForm(form);
        this.toastr.success('Submitted succesfully', 'Payment Detail Register');
      },
      (err: any) =>{console.log(err);}

      
      );
  }
  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new PaymentDetail();
  }
}
