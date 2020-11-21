import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // redirectTo: 'home/tabs',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./users/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./users/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'years',
    loadChildren: () => import('./years/years.module').then( m => m.YearsPageModule)
  },
  {
    path: 'questions/:id', 
    loadChildren: () => import('./questions/questions.module').then( m => m.QuestionsPageModule)
  },
  // {
  //   path: 'answers', 
  //   loadChildren: () => import('./answers/answers.module').then( m => m.AnswersPageModule)
  // },
  {
    path: 'schools',
    loadChildren: () => import('./schools/schools.module').then( m => m.SchoolsPageModule)
  },
  {
    path: 'putme/:id',
    loadChildren: () => import('./putme/putme.module').then( m => m.PutmePageModule)
  },
  {
    path: 'result',
    loadChildren: () => import('./result/result.module').then( m => m.ResultPageModule)
  },
  {
    path: 'instruction',
    loadChildren: () => import('./instruction/instruction.module').then( m => m.InstructionPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
