import { IController } from "@/presentation/contracts/http/i-controller";
import { Request, Response } from "express";

export function adaptRoute(controller: IController) {
    return async (request: Request, response: Response) => {
        const requestBody = {
            ...request.body,
            ...request.params,
            ...request.query,
        }
        const requestHeaders = {
            ...request.headers,
        }

        const responseData = await controller.handle({ body: requestBody, headers: requestHeaders });

        if (responseData.statusCode >= 200 && responseData.statusCode <= 299) {
            return response.status(responseData.statusCode).json(responseData.body);
        } else {
            return response.status(responseData.statusCode).json({
                error: responseData.body,
            });
        }
    }
}