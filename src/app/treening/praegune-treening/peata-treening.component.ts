import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-peata-treening',
  template: `<h1 mat-dialog-title>Olete te kindel?<h1>
            <mat-dialog-content>
              <p>Sa oled jõudnud juba {{ saadetudAndmed.progress }}%-ni<p>
            </mat-dialog-content>
            <mat-dialog-actions>
              <button mat-button [mat-dialog-close]="true">Jah</button>
              <button mat-button [mat-dialog-close]="false">Ei</button>
            </mat-dialog-actions>`
})
export class PeataTreeningComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public saadetudAndmed: any) {

  }

}
