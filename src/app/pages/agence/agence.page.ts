import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../services/authentification.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agence',
  templateUrl: './agence.page.html',
  styleUrls: ['./agence.page.scss'],
})
export class AgencePage implements OnInit {
  myData: boolean;
  constructor(private authService: AuthentificationService, private router: Router) {
    // Pour l'affichage des commissions
    if (localStorage.getItem('role') === 'ROLE_AdminAgence') {
      this.myData = true;
    } else  {
      this.myData = false;
    }
  }

  ngOnInit() {}
  // le deconnexion
  deconnexion() {
    Swal.fire({
      title: 'Are you sure to disconnect?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, disconnect!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.logout() ;
        this.router.navigate(['/login']) ;
      }
    });
  }


}
