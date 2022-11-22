export type IHttpResponse<T = any> = {
    statusCode: number;
    body: T;
}

export function ok<T>(body: T): IHttpResponse<T> {
    return {
        statusCode: 200,
        body,
    }
}

export function serverError(body: Error): IHttpResponse<Error> {
    return {
        statusCode: 500,
        body,
    }
}