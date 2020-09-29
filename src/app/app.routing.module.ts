import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { PostFormComponent } from './components/post-form/post.form.component';
import { PostListComponent } from './components/post-list/post.list.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                pathMatch: 'prefix',
                component: LayoutComponent,
                children: [
                    {
                        path: 'posts',
                        children: [
                            {
                                path: '',
                                component: PostListComponent
                            },
                            {
                                path: 'form',
                                component: PostFormComponent
                            },
                        ]
                    },
                    { path: '', redirectTo: '/', pathMatch: 'full' },
                ],
            },
        ]),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }
