import React from 'react';


const Forms = React.lazy(() => import('./views/Base/Forms'));
const ListGroups = React.lazy(() => import('./views/Base/ListGroups'));
const User = React.lazy(() => import('./views/Users/User'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/profile/forms', name: 'Forms', component: Forms },
  { path: '/profile/order', name: 'List Groups', component: ListGroups },
  { path: '/profile/user', exact: true, name: 'User Details', component: User },
];

export default routes;
