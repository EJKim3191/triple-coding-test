import { useEffect, useState } from 'react';

/**  
 * 숫자 애니메이션을 위한 Custom Hook,
 * 1. interval을 이용한 방법
 * 2. setTimeOut을 이용한 방법
 * 3. css @propery를 이용한 방법 중,
 * 
 * 2번 선택
 * 
 * 이유: Styled-Component 이용하여 prop을 지속적으로 넘겨주는 방식은 성능적으로 이슈가 있을 수 있다 생각합니다.
 *      또한 요구사항을 충족하기 위해서는 일부 로직이 들어가야합니다.
 *      증감 속도 조절 및 지속되는 시간을 조절하기 위해서는 커스텀 훅으로 제작하는것이 유용하다 생각하였습니다.
 * 
 * 구현 방안: setTimeOut 시간을 요구 시간 (2초)로 계산 
 *          총 2초의 시간 중 구간 별로 속도를 낮춤
 *          첫 두 구간은 카운트를 2씩 증가 (렌더링횟수 / 2 는 실질적인 시간에 영향을 많이주기에)
 *          나머지 구간은 1씩 증가 (비교적 속도가 낮아지는 부분은 눈에띄게)
 * 
 * 오차범위: 최대 -5ms (숫자 800까지 테스트, 컴퓨터 성능에 상이 할 수 있음)
*/
let speed: number;
let countByone: boolean = false;
let timer: number;

const useCountup = (startNum: number, targetNum: number, totalTime: number) => {
    const totalNumber = targetNum - startNum;
    const [countUp, setCountUp] = useState(startNum);
    const [temp, setTemp] = useState(0);

    useEffect(()=>{
        if(countUp >= targetNum) return() => clearTimeout(timer);


        if((countUp-startNum)/totalNumber < 28/40){
            speed = 4*(200/totalNumber)*(totalTime/2000);
        }
        else if((countUp-startNum)/totalNumber < 34/40){
            speed = 20*(200/totalNumber)*(totalTime/2000);
        }
        else if((countUp-startNum)/totalNumber < 38/40){
            speed = 20*(200/totalNumber)*(totalTime/2000);
            countByone = true;
        }
        else{
            speed = 102*(200/totalNumber)*(totalTime/2000);
            countByone = true;
        }
        if(countByone) {
            timer = setTimeout(() => setCountUp(prevCounter => prevCounter + 1), speed);
        }
        else {
            timer = setTimeout(() => setCountUp(prevCounter => prevCounter + 2), speed)
        };
        setTemp(temp+speed);
    },[countUp])

    return countUp;
};

export { useCountup };