/**
* 함수로 이루어진 배열에서, undefined가 아닌 특정값을 리턴할 경우, 첫번째로 리턴되는 값을 반환합니다.
* 없는 경우 undefined를 반환합니다.
* /
export const FunctionArraySomeResult = <P, T>(array: ((param: P) => T | undefined)[], param: P): T | undefined => {
	for (const func of array) {
		const result = func(param);
		if (result) {
			return result;
		}
	}
	return undefined;
};
