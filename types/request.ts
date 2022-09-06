
export interface RequestApiRecord {
	GET: {
		health: {
			query: {
				type: "all" | "service" | "network" | never;
			};
			response: {
				healthy: boolean;
				dependencies: {
					name: string;
					type: "service" | "network" | never;
					healthy: boolean;
				}[];
			};
		};
	};
	POST: {};
}

export type RestfulMethod = "GET" | "POST" | "PUT" | "DELETE";

export type RequestMethodUrl<M extends RestfulMethod> = M extends keyof RequestApiRecord ? RequestApiRecord[M] : never;

/** 해당 메소드의 url 리스트를 가져옵니다 */
export type RequestURI<M extends RestfulMethod> = Extract<keyof RequestMethodUrl<M>, `${string}`> extends `${infer U}`
	? U
	: never;

/** 해당 호출의 정상적인 반환값을 가져옵니다 */
export type RequestResponse<M extends RestfulMethod, U extends RequestURI<M>> = U extends keyof RequestMethodUrl<M>
	? "response" extends keyof RequestMethodUrl<M>[U]
		? RequestMethodUrl<M>[U]["response"]
		: unknown
	: never;

/** 해당 호출의 파라메터를 가져옵니다 */
export type RequestQurey<M extends RestfulMethod, U extends RequestURI<M>> = U extends keyof RequestMethodUrl<M>
	? "query" extends keyof RequestMethodUrl<M>[U]
		? RequestMethodUrl<M>[U]["query"]
		: unknown
	: never;

/** 응답 성공시 사용하는 공통 인터페이스 */
export type CommonSuccessRequestResponse<M extends RestfulMethod, U extends RequestURI<M>> = {
	data: RequestResponse<M, U>;
	status: "ok";
};

/** 실패 응답에 대한 공통 인터페이스 */
export type CommonFailRequestResponse<M extends RestfulMethod> = {
	message: string;
	status: "fail";
};

export type CommonRequestResponse<M extends RestfulMethod, U extends RequestURI<M>> =
	| CommonSuccessRequestResponse<M, U>
	| CommonFailRequestResponse<M>;
