/**
 * type은 다음과 같이 호출하세요
 *
 * `const ComponentType1 = (<Component />).type;`
 *
 *  `const ComponentType2 = Component()?.type;`
 * 
 * - 자식 요소들 중 `type`에 해당되는 자식들을 리스트의 형태로 반환합니다
 */
export const filterComponentWithType: ReactNode | ReactNode[] = (
	children: ReactNode,
	type: string | React.JSXElementConstructor<any>
) => {
	const childrens = React.Children.toArray(children);
	return childrens.filter((x) => React.isValidElement(x) && x.type == type);
};
