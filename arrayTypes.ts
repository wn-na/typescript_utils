/**
  **T[]로 선언된 타입에서 T의 값을 가져옵니다**
*/
export type ArrayElement<ArrayType> = ArrayType extends (infer ElementType)[] ? ElementType : never;
