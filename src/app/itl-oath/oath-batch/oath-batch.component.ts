import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'itl-oath-batch',
  templateUrl: './oath-batch.component.html',
  styleUrls: ['./oath-batch.component.scss']
})
export class OathBatchComponent implements OnInit {
  @Input() oathData: any;
  @Output() showPersonal =  new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  showPersonalCertificate(){
    this.showPersonal.emit();
  }
}
