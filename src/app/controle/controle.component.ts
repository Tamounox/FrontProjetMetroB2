import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-controle',
  templateUrl: './controle.component.html',
  styleUrls: ['./controle.component.scss']
})
export class ControleComponent implements OnInit {

  constructor(private tostr: ToastrService) { }

  ngOnInit() {
  }

afficherAlerte(){
  this.tostr.success('bonjour','titre');
}
  
}
