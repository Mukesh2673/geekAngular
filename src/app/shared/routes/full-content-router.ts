import { Routes } from '@angular/router';

export const full_content: Routes = [
  { 
    path: 'dashboard',
    loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'apps',
    loadChildren: () => import('../../components/apps/apps.module').then(m => m.AppsModule),
  },
  {
    path: 'apps/chat',
    loadChildren: () => import('../../components/apps/chat/chat.module').then(m => m.ChatModule)
  },
  {
    path: 'apps/contact',
    loadChildren: () => import('../../components/apps/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'apps/filemanager',
    loadChildren: () => import('../../components/apps/filemanager/filemanager.module').then(m => m.FilemanagerModule)
  },
  {
    path: 'apps/todolist',
    loadChildren: () => import('../../components/apps/todolist/todolist.module').then(m => m.TodolistModule)
  },
  {
    path: 'apps/userlist',
    loadChildren: () => import('../../components/apps/userlist/userlist.module').then(m => m.UserlistModule)
  },
  {
    path: 'widgets',
    loadChildren: () => import('../../components/widgets/widgets.module').then(m => m.WidgetsModule),
  },
  {
    path: 'forms',
    loadChildren: () => import('../../components/forms/forms.module').then(m => m.FormElementModule)
  },
  { 
    path: 'charts',
    loadChildren: () => import('../../components/charts/charts.module').then(m => m.ChartssModule),
  },
  {
    path: 'maps',
    loadChildren: () => import('../../components/maps/maps.module').then(m => m.MapsModule),
  },
  {
    path: 'tables',
    loadChildren: () => import('../../components/tables/tables.module').then(m => m.TablesModule),
  },
  {
    path: 'elements',
    loadChildren: () => import('../../components//elements/elements.module').then(m => m.ElementsModule)
  },
  { 
    path: 'icons',
    loadChildren: () => import('../../components/icons/icons.module').then(m => m.IconsModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('../../components/pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'pages/profile',
    loadChildren: () => import('../../components/pages/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'pages/email',
    loadChildren: () => import('../../components/pages/email/email.module').then(m => m.EmailModule)
  },
  {
    path: 'pages/pricing',
    loadChildren: () => import('../../components/pages/pricing/pricing.module').then(m => m.PricingModule)
  },
  {
    path: 'pages/invoice',
    loadChildren: () => import('../../components/pages/invoice/invoice.module').then(m => m.InvoiceModule)
  },
  {
    path: 'pages/blog',
    loadChildren: () => import('../../components/pages/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'ecommerce',
    loadChildren: () => import('../../components/ecommerce/ecommerce.module').then(m => m.EcommerceModule),
  },
  {
    path: 'basic-elements',
    loadChildren: () => import('../../components/basci-elements/basic-elements.module').then(m => m.BasciElementsModule)
  },
  {
    path: 'firebase',
    loadChildren: () => import('../../components/firebase/firebase.module').then(m => m.FirebaseModule)
  },
  {
    path: 'users',
    loadChildren: () => import('../../modules/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('../../modules/profile/profile.module').then(m => m.ProfileModule)
  },

  {
    path:'admins',
    loadChildren: () => import('../../modules/admins/admins.module').then(m=> m.AdminsModule)

  },

  {
    path:'drivers',
    loadChildren: () => import('../../modules/drivers/drivers.module').then(m=> m.DriversModule),



  }
  


]