import { Component, OnInit } from '@angular/core';
import {ListSiegeService} from '../../services/list-siege.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.page.html',
  styleUrls: ['./list-user.page.scss'],
})
export class ListUserPage implements OnInit {
  infoUsers: any;
  constructor(private users: ListSiegeService,
              private router: Router) {
    this.users.myUsers().subscribe(data => {
       console.log(data);
       this.infoUsers = data ;
    }) ;
  }

  ngOnInit() {
  }

}
