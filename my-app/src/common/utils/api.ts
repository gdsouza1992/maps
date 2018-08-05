import axios from 'axios';

const ROOT_URL = 'http://0.0.0.0:7777';

export type BaseResource = 'signin' | 'signup'

export type ApiQuery = {
    path?: string;
    baseResource: BaseResource;
    additionalResource: string;
    baseResourceId?: number;
    limit?: number;
};

export type ClientError = {
    message?: string
    data?: {}
    status: {
        code: number,
        text: string
    }
}

export const url = (params: Partial<ApiQuery> | string) => {

    // TODO: Use params as string only for dev
    // Everything should go via ApiQuery in the future
    if (typeof params === 'string') {
        return params;
    }

    const { baseResource, additionalResource, baseResourceId} = params;
    let urlBuilder;

    if(!baseResource) {
        return ROOT_URL;
    }

    urlBuilder = `${ROOT_URL}/${baseResource}`;
    if(additionalResource) {
        urlBuilder += `/${additionalResource}`;
    }

    if(baseResourceId) {
        urlBuilder += `/${baseResourceId}`;
    }

    return urlBuilder;
}

export const get = async (query: Partial<ApiQuery> | string): Promise<any> => {
    if (typeof query === 'string') query = { path: query };
    return axios.get(
        url(query)
    );
};

export const post = (query: Partial<ApiQuery> | string, data: object = {}): Promise<any> => {
    return axios.post(
        url(query),
        data
    )
};

export const makeError = (error) : ClientError => {
    let postReqData;
    try {
        postReqData = JSON.parse(error.response.config.data)
    } catch (e) {
        postReqData = {}
    }

    const errorData: ClientError = {
        data: postReqData,
        message: error.response.data.message,
        status: {
            code: error.response.status,
            text: error.response.statusText
        }
    };
    console.error(errorData.message);

    return errorData;
};
