/**
 * @author: Patrik Forsberg <patrik.forsberg@coldmind.com>
 * @date: 2021-10-14 13:39
 */
import { IRouteInfo } from "@dTypes/route-info.type";
import { RouterCore } from "./router-core";
import { IDinaController } from "@dTypes/dina-controller.type";
import { RouteMethod } from "@dTypes/route.types";
import { Router } from "express";
export declare class ControllerRouter {
    private routerCore;
    private controller;
    basePath: string;
    router: Router;
    routesInfo: IRouteInfo[];
    constructor(routerCore: RouterCore, controller: IDinaController);
    havePath(path: string): boolean;
    setBasePath(path: string): void;
    get(route: string, func: Function, noBasePath?: boolean): boolean;
    post(route: string, func: Function, noBasePath?: boolean): boolean;
    delete(route: string, func: Function, noBasePath?: boolean): boolean;
    all(route: string, func: Function, noBasePath?: boolean): boolean;
    registerRoute(method: RouteMethod, route: string, func: Function, noBasePath?: boolean): boolean;
}
//# sourceMappingURL=controller-router.d.ts.map