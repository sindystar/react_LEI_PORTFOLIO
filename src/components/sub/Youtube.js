import Layout from '../common/Layout';
function Youtube() {
	return (
		<Layout name={'Youtube'}>
			{/* 부모에서 자식으로 props로 넘길 속성과 값을 지정한것
			name={'Youtube'}이것 자체가  props인것 */}
			<p>Youtube Content</p>
		</Layout>
	);
}

export default Youtube;
