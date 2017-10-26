무한 슬라이드 플러그인
====================

예제는 example.html 입니다.

# 1 How to use
## 1.1. 슬라이드 생성하기
슬라이드를 생성합니다.
```
$( 'ul' ).carouslider();
```
- 가급적 `<ul>` 태그를 사용하세요.
- 슬라이드 이미지들은 `<li>` 태그입니다.
- 슬라이드는 기본적으로 가로 사이즈(width)가 같아야 합니다.
- 슬라이드 이미지 또한 가로 사이즈(width)가 같아야 합니다.

## 1.2. 속성 설정하기
슬라이드의 속성을 설정합니다.
```
var attr = {
	location: 'right',
	loop: 8000
};
$( 'ul' ).carouslider( attr );
```
- `location`은 방향을 설정합니다.
	+ right: 오른쪽 방향으로 움직입니다.
	+ left: 오른쪽 방향으로 움직입니다.
- `loop`는 슬라이드가 넘어가는 시간을 설정합니다. 단위는 millisecond 입니다. (예: 1000는 1초)

## 1.3. 방향 변경하기
슬라이드의 방향을 변경 또는 정지시킵니다.
```
// 왼쪽 방향으로 이동
$( 'button.left' ).click( function () {
	$.carousliderLeft();
} );

// 오른쪽 방향으로 이동
$( 'button.right' ).click( function () {
	$.carousliderRight();
} );

// 정지
$( 'button.stop' ).click( function () {
	$.carousliderStop();
} );
```
- `$.carousliderLeft()`는 왼쪽 방향으로 움직입니다.
- `$.carousliderRight()`는 오른쪽 방향으로 움직입니다.
- `$.carousliderStop()`는 애니메이션을 정지시킵니다.
