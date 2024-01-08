import { Routes } from '@angular/router';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { PostDetailsComponent } from './modules/post-details/post-details.component';
import { EditPostComponent } from './modules/edit-post/edit-post.component';
import { CreatePostComponent } from './modules/create-post/create-post.component';

export const routes: Routes = [
    {
        path:"",
        component: NavbarComponent,
        children:[
            {
            path:"",
            component:LandingPageComponent
        },
        { path: 'post/new', component: CreatePostComponent },
        { path: 'post/:id', component: PostDetailsComponent },
        { path: 'post/:id/edit', component: EditPostComponent },
    ]
    }
];
