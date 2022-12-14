/**
 * @author: Patrik Forsberg <patrik.forsberg@coldmind.com>
 * @date: 2021-06-27 11:57
 */
import { IActionResult } from "dina-common";
import { ControllerRouter } from "./controller-router";
import { IDinaController } from "../types/dina-controller.type";
import { Response } from "express";
export declare class BaseController implements IDinaController {
    baseRoute: string;
    initRoutes(routes: ControllerRouter): Promise<void>;
    sendActionResult(resp: Response, actionRes: IActionResult): void;
    sendError(resp: Response, error?: any): void;
}
//# sourceMappingURL=base.controller.d.ts.map