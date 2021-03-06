import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatStepper } from '@angular/material';

export interface Area {
  value: string;
  viewValue: string;
}

export interface Gcod {
  value: string;
  viewValue: string;
}

export interface GcodGroup {
  disabled?: boolean;
  name: string;
  gcod: Gcod[];
}
@Component({
  selector: 'app-report-delete',
  templateUrl: './report-delete.component.html',
  styleUrls: ['./report-delete.component.scss']
})
export class ReportDeleteComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  time = {hour: 13, minute: 30};
  meridian = true;

  toggleMeridian() {
    this.meridian = !this.meridian;
}
areas: Area[] = [
  {value: 'area-01', viewValue: 'Agulana'},{value: 'area-02', viewValue: 'Athurugiriya'},{value: 'area-03', viewValue: 'Bambalapitiya'},
  {value: 'area-04', viewValue: 'Boralesgamuwa'},{value: 'area-05', viewValue: 'Borella'},{value: 'area-06', viewValue: 'Dehiwala'},
  {value: 'area-07', viewValue: 'Homagama'},{value: 'area-08', viewValue: 'Hospital Police'},{value: 'area-09', viewValue: 'Jayawardanapura'},
  {value: 'area-10', viewValue: 'Kahathuduwa'},{value: 'area-11', viewValue: 'Kirulapone'},{value: 'area-12', viewValue: 'Kohuwala'},
  {value: 'area-13', viewValue: 'Kollupitiya'},{value: 'area-14', viewValue: 'Kottawa'},{value: 'area-15', viewValue: 'Maharagama'},
  {value: 'area-16', viewValue: 'Meegoda'},{value: 'area-17', viewValue: 'Mirihana'},{value: 'area-18', viewValue: 'Moragahahena'},
  {value: 'area-19', viewValue: 'Moratumulla'},{value: 'area-20', viewValue: 'Moratuwa'},{value: 'area-21', viewValue: 'Mt-Lavinia'},
  {value: 'area-22', viewValue: 'Padukka'},{value: 'area-23', viewValue: 'Panadura'},{value: 'area-24', viewValue: 'Piliyandala'},
  {value: 'area-25', viewValue: 'Welikada'},{value: 'area-26', viewValue: 'Wellawatte'}   
];
constructor(private _formBuilder: FormBuilder) {}

ngOnInit() {
  this.firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required]
  });
  this.secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required]
  });
}

@ViewChild('stepper') stepper: MatStepper;

  ngAfterViewInit() {
    this.stepper.selectedIndex = 5;
}
gcodControl = new FormControl();
gcodGroups: GcodGroup[] = [
  {
    name: 'Natural Death',
    gcod: [
      
      {value: 'cancer', viewValue: 'Cancer'},
      {value: 'stroke', viewValue: 'Stroke'},

      {value: 'iheartd', viewValue: 'Ischemic Heart disease'},
      {value: 'Pneumonia', viewValue: 'Pneumonia'},
      {value: 'Infection', viewValue: 'Infection'},
      {value: 'ckd', viewValue: 'Chronic Kidney Disease'},
      {value: 'clcdandc', viewValue: 'Chronic Liver Cell Disease and Cirrhosis'},
      {value: 'cld', viewValue: 'Chronic Lung Disease'},
      {value: 'dd', viewValue: 'Diarrheal Disease'},

    ]
  },
  {
    name: 'Unnatural Death',
    gcod: [
      {value: 'accident', viewValue: 'Road traffic accident/Train accident'},
      {value: 'hanging', viewValue: 'Hanging'},
      {value: 'electrocution', viewValue: 'Electrocution'},
      {value: 'drowning', viewValue: 'Drowning'},
      {value: 'burns', viewValue: 'Burns'},

      {value: 'cands', viewValue: 'Cuts and Stabs'},
      {value: 'poisoning', viewValue: 'Poisoning'},
      {value: 'firearm', viewValue: 'Firearm'},
      {value: 'fandm', viewValue: 'Fallen/Macinery'},
    ]
  },
  {
    name: 'Other',
    gcod: [
      {value: 'underinvest', viewValue: 'Under investigation'},
      
    ]
  }
];

}
