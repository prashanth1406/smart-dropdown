import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-smart-dropdown',
  templateUrl: './smart-dropdown.component.html',
  styleUrls: ['./smart-dropdown.component.scss']
})
export class SmartDropdownComponent implements OnInit {
  @ViewChild('countriesFocus', { static: false }) countriesFocus:ElementRef;
  @Input() privilege:any;
  @Input()noOfItems:any;
  countries:any[] =[];
  showCountriesDropdown:Boolean =false;
  copiedCountries:any[]=[];
  selectedCountryName:string='';


  constructor() { }

  ngOnInit() {
    this.copiedCountries = [{"name":"India"},{"name":"Australia"},{"name":"Japan"},{"name":"Canada"},{"name":"Germany"}];
    this.countries = _.cloneDeep(this.copiedCountries);
  }


  selectCountry(e){
    e.preventDefault();
    e.stopPropagation();
    this.showCountriesDropdown = true;
    this.countries = this.copiedCountries;
    setTimeout(() => {
      this.countriesFocus.nativeElement.focus();
    }, 0);

  }
  onSearchCountryData(val){
    let searchText = val.currentTarget.value.trim();
    let filterdCountries = this.copiedCountries.filter(data => {
      if (data.name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0) {
        return data;
      }
    });
    this.countries = filterdCountries;

  }
  selectedCountry(e){
    e.preventDefault();
    e.stopPropagation();
    this.selectedCountryName =e.option.value;
    this.showCountriesDropdown =false;
  }
  addCountry(value){
    this.copiedCountries.push({name:value});
    this.countries.push({name:value});
    this.selectedCountryName =value;
    this.showCountriesDropdown =false;
  }
  loadMore(value,e){
   this.noOfItems += value;

  }
}
