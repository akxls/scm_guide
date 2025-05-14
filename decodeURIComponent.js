console.log('decodeURIComponent.js has been loaded successfully!');

document.addEventListener('DOMContentLoaded', () => {
	// 모든 <img> 태그의 src를 확인 및 수정
	document.querySelectorAll('img').forEach(img => {
		let originalSrc = img.getAttribute('src'); // 원본 src 경로 가져오기
		if (originalSrc) {
			try {
				// 한글/특수문자가 포함되었는지 확인
				if (originalSrc.includes('%')) {
					try {
						// 한 번 디코딩된 경로 처리
						originalSrc = decodeURIComponent(originalSrc);
					} catch (decodeError) {
						console.error('디코딩 중 오류가 발생했습니다:', originalSrc, decodeError);
					}
				}
				// 최종 경로를 다시 URI로 인코딩하여 브라우저의 요청 경로와 일치시킨다
				const encodedSrc = encodeURI(originalSrc);
				img.setAttribute('src', encodedSrc); // 최종 인코딩된 경로로 설정
				console.log(`Final img src: ${encodedSrc}`);
			} catch (e) {
				console.error('이미지 경로 처리 오류:', originalSrc, e);
			}
		}
	});

	// 모든 <a> 태그의 href를 확인 및 수정
	document.querySelectorAll('a').forEach(link => {
		let originalHref = link.getAttribute('href'); // 원본 href 경로 가져오기
		if (originalHref) {
			try {
				// 한글/특수문자가 포함되었는지 확인
				if (originalHref.includes('%')) {
					try {
						// 한 번 디코딩된 경로 처리
						originalHref = decodeURIComponent(originalHref);
					} catch (decodeError) {
						console.error('디코딩 중 오류가 발생했습니다:', originalHref, decodeError);
					}
				}
				// 최종 경로를 다시 URI로 인코딩하여 브라우저의 요청 경로와 일치시킨다
				const encodedHref = encodeURI(originalHref);
				link.setAttribute('href', encodedHref); // 최종 인코딩된 경로로 설정
				console.log(`Final link href: ${encodedHref}`);
			} catch (e) {
				console.error('링크 경로 처리 오류:', originalHref, e);
			}
		}
	});
});