import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-together',
  templateUrl: './together.component.html',
  styleUrls: ['./together.component.css']
})
export class TogetherComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  doIsSure(){
    this.router.navigate(['./issue']);
  }
  doDetails(){
    this.router.navigate(['./details']);
  }

}
