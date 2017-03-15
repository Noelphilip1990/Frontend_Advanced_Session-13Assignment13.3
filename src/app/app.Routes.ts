import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './app.homeComponent';
import { RoleComponent } from './app.contactComponent';
import { AboutComponent } from './app.aboutComponent';
import { AdminComponent } from './adminComponent';
import { SuperadminComponent } from './superadminComponent';
import { MemberComponent } from './memberComponent';
const route:Routes =[
{ path: '', component: HomeComponent },
{ path: 'about', component: AboutComponent },
	{	path: 'role', component: RoleComponent,
		
		children: [
			{ path: "member", component: MemberComponent },
			{ path: "admin", component: AdminComponent },
			{ path: "super", component: SuperadminComponent },
		]
	},
{ path: '**', component: HomeComponent },
]

export const routing= RouterModule.forRoot(route);