import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
//
/*
Link 컴포넌트를 이용한 페이지 이동
link는 a태그처럼 링크로 연결해주지만
url개념이 아니라 path의 개념
NavLink 는 Link의 special version으로 
특정 링크에 적용해서 스타일 넣어줄수 있다
이것이 link와 navlink의 큰 차이점
어떤것이 특별한것인가
activeStyle , activeClassName 속성
=> 리액트 웹의 현재 url과 to가 가르키는 링크가 일치하면
활성화되면서 적용되고, 그렇지 않으면 비활성화 된다
*/

/*
부모컴포넌트가 자식 컴포넌트를 호출하면서 특정 정보값을 전달하는데 그 방법으로는 props를 전달한다
전달 방법은 단방향 데이터 바인딩
읽기전용으로만 자식컴포넌트는 해당 props를 사용할 수 있다
자식 컴포넌트안에서 해당 props을 변경할 수 없다
이유: 리액트의 생명주기를 해치는 방법이므로 자식 컴포넌트는 해당 props를 변경할 수 없다

생명주기
1. 마운트(생성)
컴포넌트의 인스턴스가 생성되어서, DOM에 삽입될때 호출되는 것들
2.업데이트
-> props, state가 변경되면 렌더가 감지해서 순서대로 호출되면서 렌더링시키는 것
3. 언마운트(해제)
컴포넌트를 DOM에서 제거하는 과정

react hook
hook은 함수형 컴포넌트에서 state와 생명주기 기능을 연동할수 있게 하는 함수의 일종이다
hook이전에는 객체지향의 class를 통해서만 react를 사용할수 있었지만
hook을 통해서 class없이도 사용이 가능해졌다
컴포넌트를 함수단위로 쪼개서 사용할수 있다

hook사용 규칙
1. 최상위에서만 hook을 호출한다 -> 반복문이나 조건문 중첩된 함수등에서는 hook을 실행할수없다
2. 리액트 함수 컴포넌트에서만 hook을 호출한다 -> 일반 js함수에서 호출을 할 수 없다

hook의 종류
=> useState, useEffect, useRef
확실하게 알아야할 훅
*/

function Header(props) {
	const active = { color: 'hotpink' };
	return (
		<header className={props.type}>
			<div className='inner'>
				<h1>
					<NavLink exact to='/' activeStyle={active}>
						LOGO
					</NavLink>
				</h1>
				<ul id='gnb'>
					<li>
						<NavLink to='/department' activeStyle={active}>
							Department
						</NavLink>
					</li>
					<li>
						<NavLink to='/gallery' activeStyle={active}>
							Gallery
						</NavLink>
					</li>
					<li>
						<NavLink to='/youtube' activeStyle={active}>
							Youtube
						</NavLink>
					</li>
					<li>
						<NavLink to='/community' activeStyle={active}>
							Community
						</NavLink>
					</li>
					<li>
						<NavLink to='/location' activeStyle={active}>
							Location
						</NavLink>
					</li>
					<li>
						<NavLink to='/members' activeStyle={active}>
							Membership
						</NavLink>
					</li>
				</ul>
				<FontAwesomeIcon icon={faBars} />
			</div>
		</header>
	);
}

export default Header;
