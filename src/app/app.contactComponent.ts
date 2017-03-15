import { Component } from '@angular/core';
@Component({
	selector: 'role',
	template: `<h2>Contact Section</h2>
	<div class="col-sm-4"><b><a routerLink="super" routerLinkActive="active">Super Admin</a></b></div><div class="col-sm-4"><b><a routerLink="admin" routerLinkActive="active">admin</a></b></div><div class="col-sm-4"><b><a routerLink="member" routerLinkActive="active">Member</a></b></div><br>
	<router-outlet></router-outlet>
	`,
})
export class RoleComponent {

}