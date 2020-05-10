import React, { Component, Suspense } from '../../../../../node_modules/react';
import { Redirect, Route, Switch} from '../../../../../node_modules/react-router-dom';
import * as router from '../../../../../node_modules/react-router-dom';
import { Container } from '../../../../../node_modules/reactstrap';
import "./../wrap.css";
import "./responsive.css";

import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';

const Card = React.lazy(() => import('./Card'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const Nav = React.lazy(() => import('./Nav'));

class DefaultLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }

  render() {
    return (



<div>

    <div class="app-body">
    <div class="sidebar">
      <Nav />
    </div>
    <main class="main">

    <div class="container">
      <div class="container-fluid">
      <div class="row1">
        <div class="col1">
          <Card fixed src={"/prescriptions/8j39ibes0kq31.jpg"}>

          </Card>

        </div>
        <div class="col1">
          <Card fixed src={"/prescriptions/AT_534565a3-bimage_story.jpg"}>
              {/*<Suspense  fallback={this.loading()}>
                <Nav onLogout={e=>this.signOut(e)}/>
              </Suspense>*/}
            </Card>

        </div>

        <div class="col1">
          <Card fixed src={"/prescriptions/av066xO_460s.jpg"}>

          </Card>
        </div>
        <div class="col1">
          <Card fixed src={"/prescriptions/B99336816Z.1_20151218180325_000_GHBNOE93.1-0.jpg"}>

            </Card>
        </div>
      </div>
      
    </div>
    </div>

    </main>
    <aside class="aside-menu">
    </aside>
    </div>
    <footer class="app-footer">
    </footer>
    
    </div>
    );
  }
}

export default DefaultLayout;
