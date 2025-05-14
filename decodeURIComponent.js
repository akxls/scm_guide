console.log('decodeURIComponent.js has been loaded successfully!!!');

document.addEventListener('DOMContentLoaded', () => {
	// 모든 <img> 태그의 src 경로를 확인 및 출력
	document.querySelectorAll('img').forEach(img => {
		const originalSrc = img.getAttribute('src'); // 원본 src 경로 가져오기

		if (originalSrc) {
			try {
				// src 경로를 디코딩하지 않고 그대로 유지
				console.log(`Original img src: ${originalSrc}`);
				// src를 다시 셋팅(실제 디코딩하지 않아도 정상 처리)
				img.setAttribute('src', originalSrc);
			} catch (e) {
				console.error('이미지 경로 처리 오류:', originalSrc, e);
			}
		}
	});

	// 모든 <a> 태그의 href 경로를 확인 및 출력
	document.querySelectorAll('a').forEach(link => {
		const originalHref = link.getAttribute('href'); // 원본 href 경로 가져오기

		if (originalHref) {
			try {
				// href 경로를 디코딩하지 않고 그대로 유지
				console.log(`Original link href: ${originalHref}`);
				// href를 다시 셋팅(실제 디코딩하지 않아도 정상 처리)
				link.setAttribute('href', originalHref);
			} catch (e) {
				console.error('링크 경로 처리 오류:', originalHref, e);
			}
		}
	});
});