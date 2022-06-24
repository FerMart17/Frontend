import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal-admi',
  templateUrl: './principal-admi.component.html',
  styleUrls: ['./principal-admi.component.css']
})
export class PrincipalAdmiComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


}
