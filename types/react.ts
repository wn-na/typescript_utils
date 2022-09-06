import React from "react";

namespace Unencapsulation {
    /**
      React.Validator 내부의 원소값을 가져옵니다
    */
	export type ReactValidatorElement<PropType> = PropType extends React.Validator<infer Element> ? Element : never;
    /**
      리엑트의 함수형 컴포넌트의 내부 props의 값을 가져옵니다
    */
	export type RNViewProps<ReactView extends React.VoidFunctionComponent | React.FunctionComponent> = PropsElement<ReactView["propTypes"]>;
	type PropsElement<Props> = {
		[P in keyof Props]: ReactValidatorElement<Props[P]>;
	};
}
