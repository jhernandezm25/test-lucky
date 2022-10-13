export interface Response {
    statusCode?: number,
    message?: string[],
    error?: string,
    data?: Object
}

export enum StatusMessage {
    BadRequest = "Bad Request",
    NotFound = "Not Found",
    Success = "Success",
    InternalError = "Internal Error"
}

export enum StatusCode {
    NotFound = 404,
    Success = 200,
    Accepted = 201,
    BadRequest = 400,
    InternalError = 500
}

export enum CustomizeMessage {
    UserExist = 'User already Exist',
    InvalidLogin = 'Invalid password or username'
}
