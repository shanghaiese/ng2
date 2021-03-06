"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("../../component/home/home.component");
var tabs_demo_1 = require("../+tabs/tabs.demo");
var color_demo_1 = require("../+colors/color.demo");
var attrs_demo_1 = require("../+attr/attrs.demo");
var host_demo_1 = require("../+host/host.demo");
var parent_1 = require("../dynamic-component/parent");
var viewchild_demo_1 = require("../+view-child/viewchild.demo");
// import {HttpRouters} from '../+http/http.routes';
// import { HttpDemoModule } from '../+http/http.module';
var pagination_demo_1 = require("../pagination/pagination.demo");
var dialog_demo_1 = require("../+dialog/dialog.demo");
var d3_demo_1 = require("../d3/d3.demo");
var echarts_demo_1 = require("../echarts/echarts.demo");
var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'tabs', component: tabs_demo_1.TabsDemoComponent },
    { path: 'attrs', component: attrs_demo_1.AttrsDemoComponent },
    { path: 'host', component: host_demo_1.HostDemo },
    { path: 'color', component: color_demo_1.ColorDemo },
    { path: 'dynamic', component: parent_1.DynamicComponentDemo },
    { path: 'viewchild', component: viewchild_demo_1.ViewChildComponentDemo },
    { path: 'http', loadChildren: 'app/example/+http/http.module#HttpDemoModule' },
    // ...HttpRouters,
    { path: 'pagination', component: pagination_demo_1.PaginationDemo },
    { path: 'dialog', component: dialog_demo_1.DialogDemo },
    { path: 'd3', component: d3_demo_1.D3DemoComponent },
    { path: 'echarts', component: echarts_demo_1.EchartsDemoComponent },
];
var routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
exports.routing = routing;
//# sourceMappingURL=app.routes.js.map