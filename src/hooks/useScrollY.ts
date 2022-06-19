import { useState, useEffect } from "react";
import * as _ from 'lodash'

/**
 * Problem: useState 사용으로 scroll 값이 달라질 때 마다 부모 요소에 리렌더링을 발생시킨다
 * 
 * Solution: useState -> useRef 로 변경하여 사용해보자 
 * Reason: Mutable 한 state를 갖고 싶을 때 (리렌더링을 방지하는)
 * 
 * -> Problem: 부모 요소에 반영을 못한다 (listener만 적용된다)
 * Reason: MainTemplate에서 사용된 변수(컴포넌트)가 리렌더링 되지 않아 적용되지 않는다
 * 
 * Solution2: 커스텀 훅의 param과 return value를 수정하자
 * Reason: 매번, 스크롤 이벤트마다 주는 것이 아닌, 이벤트에서 트리거 될 때, true값을 한번만 리턴하자 (페이지가 로딩 된 후, 영역을 지나가면 한번만 출력할 것이기 때문에)
 * 
 * Solved
 * 리렌더링 방지 완료.
 */

const useScrollY = (limit :number) => {
    const [isOver, setIsOver] = useState(false);

    const listener = () => {
        if(window.pageYOffset >= limit){
            setIsOver(true);
            window.removeEventListener('scroll', listener);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", _.throttle(listener, 10));
        return () => {
            window.removeEventListener("scroll", listener);
        };
    },[]);

    return isOver;
}
export { useScrollY };