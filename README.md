# 시작
`node index.js`
# 최적화
1. print.css media 쿼리 달기
2. js load 함수안에서 실행되면 evaluate script가 아닌 load 블록이 더 커짐 타임라인에서
3. js를 body아래에서 호출하니 속도 빨라짐 => js 다운로드 우선순위 낮아져서 다른 파일이 더 빨리 다운로드 됨, 더 빨리 실행됨
4. style.css 미니파이후 contentslength 줄어듬 1500 => 1100 (걍 그렇다만 보여주기 후에는 되돌리고 작업)
5. 이미지 크기 줄이기 + 추가로 압축 소개 jpg,webp 확장자
6. 이미지 height, width 고정해 layout shift 줄이기
7. font
font 받아오는 외부 css => 내부 css로 변경(style.css로 이동), 필요한 것만 추가할 수도 있지만 일단 font 불러오는건 그대로 감

font가 로딩될 때까지 recalculate style대기 왜?=>FOIT
FOIT vs FOUT
어떻게 해결? 다양한 방법이 있지만 간단히 할 수있는 font-display: swap사용 => LCP줄어든것 보여주기

참고
    https://d2.naver.com/helloworld/4969726
    https://simonhearne.com/2021/layout-shifts-webfonts/
    https://showerbugs.github.io/2018-02-02/%EC%9B%B9%ED%8F%B0%ED%8A%B8-%EC%B5%9C%EC%A0%81%ED%99%94-%ED%95%98%EA%B8%B0

7. 인라인 vs external 장단점 간단히 => 인라인보다는 external 분리후 lazyloding, defer, async 활용이 더 좋다는 식으로
참고: https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp
css 인라인 => DCM이 더 빨라짐, 네트워크 통신 줄어듦 => 시ㅈㄴ 절약
마찬가지로 JS도 같을까? => 그렇지 않다 왜냐하면 cssom이 빌드된 후 JS가 실행되기 때문에 JS가 인라인이건 익스터널이건 상관없다.  external로 쓰고 async나 defer달아주는게 좋음
9. 마무리