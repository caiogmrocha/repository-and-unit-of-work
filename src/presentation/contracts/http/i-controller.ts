import { IHttpRequest } from "./i-http-request";
import { IHttpResponse } from "./i-http-response";

export interface IController<RQ = any, RP = any> {
    handle(request: IHttpRequest<RQ>): Promise<IHttpResponse<RP>>;
}