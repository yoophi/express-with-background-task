# express-with-background-task

express app 시작시, `longTask()` 가 시작함.

`longTask` 는 `count` 를 증가시키면서, `app.set('count')` 를 이용해 현재 값을 express app 에 전달.

`:3000/count` 로 `count` 값을 가져올 수 있음.

`:3000/quit` 주소를 호출하면, express app 이 종료함 (`process.exit()` 호출)
