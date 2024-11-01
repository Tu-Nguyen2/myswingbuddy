import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { MySwingBuddyComponent } from './my-swing-buddy/my-swing-buddy.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterLink, RouterLinkActive, RouterOutlet, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire/compat'





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, LoginComponent, UserHomeComponent, MySwingBuddyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'amplify-angular-template';
}



const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'Login', component: LoginComponent},
  {path: 'UserHome', component: UserHomeComponent},
  {path: 'MySwingBuddy', component: MySwingBuddyComponent},
  {path: '**', component: PageNotFoundComponent},
  {path: 'Home', component: HomeComponent}
]

