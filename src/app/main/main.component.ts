import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  datas: object = [
    
    {
      "_id": "5fffef6d033ed3e7fd0ad079",
      "picture": "assets/company_logos/logo1.svg",
      "name": "Cheri Roth",
      "company": "MELBACOR",
      "registered": "2018-08-17",
      "location": "Succasunna"
    },
    {
      "_id": "5fffef6d5cf13e10cf9030b8",
      "picture": "assets/company_logos/logo2.svg",
      "name": "Graciela Kirk",
      "company": "UNEEQ",
      "registered": "2017-10-06",
      "location": "Bartonsville"
    },
    {
      "_id": "5fffef6d3e88d7222640a833",
      "picture": "assets/company_logos/logo3.svg",
      "name": "Baird Roach",
      "company": "STROZEN",
      "registered": "2016-04-26",
      "location": "Brandermill"
    },
    {
      "_id": "5fffef6d94027a908e451891",
      "picture": "assets/company_logos/logo4.svg",
      "name": "Willie Obrien",
      "company": "BITREX",
      "registered": "2019-11-03",
      "location": "Kenwood"
    },
    {
      "_id": "5fffef6d2989889e8fa3e6a3",
      "picture": "assets/company_logos/logo1.svg",
      "name": "Buckner Strickland",
      "company": "ZILLAN",
      "registered": "2019-03-17",
      "location": "Cliff"
    },
    {
      "_id": "5fffef6d9c5b9d7d7f7b9518",
      "picture": "assets/company_logos/logo2.svg",
      "name": "Hanson Holloway",
      "company": "RONBERT",
      "registered": "2014-05-05",
      "location": "Whitestone"
    },
    {
      "_id": "5fffef6d23b6e4a08652ce17",
      "picture": "assets/company_logos/logo3.svg",
      "name": "Letha Frye",
      "company": "ENTHAZE",
      "registered": "2015-06-27",
      "location": "Wolcott"
    }
    
  ]

  users: object = [
    {
      "_id": "60000524bcfb3e35b9d9a06e",
      "picture": "http://placehold.it/32x32",
      "name": "Velez Pittman",
      "address": "Caron, Tennessee",
      "salary": "$2519"
    },
    {
      "_id": "6000052496cadc8adf17931e",
      "picture": "http://placehold.it/32x32",
      "name": "Reyna Burch",
      "address": "Orviston, Colorado",
      "salary": "$1491"
    },
    {
      "_id": "600005249d0e18831b5168bd",
      "picture": "http://placehold.it/32x32",
      "name": "Hebert Lawson",
      "address": "Gerber, Virgin Islands",
      "salary": "$2994"
    },
    {
      "_id": "60000524bc99c5344973c3d7",
      "picture": "http://placehold.it/32x32",
      "name": "Foreman Lucas",
      "address": "Lloyd, New Jersey",
      "salary": "$1097"
    },
    {
      "_id": "600005248fd81fe0c38bbd01",
      "picture": "http://placehold.it/32x32",
      "name": "Witt Berry",
      "address": "Grandview, Florida",
      "salary": "$2229"
    },
    {
      "_id": "60000524d3eb798a1ef78286",
      "picture": "http://placehold.it/32x32",
      "name": "Valdez Leon",
      "address": "Freelandville, Ohio",
      "salary": "$1731"
    }
  ]

  
  
  constructor() { }

  ngOnInit(): void {
   
  }
}
