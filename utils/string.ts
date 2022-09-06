/**
* `\n`에서 " "로, `\r`에서 ""로 전체 변환합니다
*/
export const replaceWhiteSpace = (str: string): string => str.replace(/\n/g, " ").replace(/\r/g, "");

/**
* 모든 타입을 string으로 변환합니다
  - `object`: JSON.stringify
*/
export function stringify(value: any): string {
	switch (typeof value) {
		case "string":
		case "object":
			return JSON.stringify(value);
		default:
			return String(value);
	}
}
