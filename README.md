# 시작
`node index.js`
# 최적화
1. print.css media 쿼리 달기
2. js load 함수안에서 실행되면 evaluate script가 아닌 load 블록이 더 커짐 타임라인에서
3. js를 body아래에서 호출하니 속도 빨라짐 => js 다운로드 우선순위 낮아져서 다른 파일이 더 빨리 다운로드 됨, 더 빨리 실행됨
4. style.css 미니파이후 contentslength 줄어듬 1500 => 1100 (걍 그렇다만 보여주기 후에는 되돌리고 작업)
5. 이미지 크기 줄이기 + 추가로 압축 소개 jpg,webp 확장자
6. 이미지 height, width 고정해 layout shift 줄이기
7. 인라인 js timeline이 어떻게 변화하는지 external과의 차이
8. 인라인 style ""
9. 마무리