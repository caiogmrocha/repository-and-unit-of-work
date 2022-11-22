export type IHttpRequest<T = any> = {
    headers: any;
    body: T;
}