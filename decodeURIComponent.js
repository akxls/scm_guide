	document.addEventListener('DOMContentLoaded', () => {
	// 모든 <img> 태그의 src를 디코딩하여 수정
	document.querySelectorAll('img').forEach(img => {
		const originalSrc = img.getAttribute('src');
		if (originalSrc) {
			try {
				// 기존 src를 디코딩
				const decodedSrc = decodeURIComponent(originalSrc);
				img.setAttribute('src', decodedSrc); // 디코딩된 src를 다시 설정
			} catch (e) {
				console.error('이미지 경로 디코딩 오류:', originalSrc, e);
			}
		}
	});

	// 모든 <a> 태그의 href를 디코딩하여 수정
	document.querySelectorAll('a').forEach(link => {
	const originalHref = link.getAttribute('href');
	if (originalHref) {
	try {
	// 기존 href를 디코딩
	const decodedHref = decodeURIComponent(originalHref);
	link.setAttribute('href', decodedHref); // 디코딩된 href를 다시 설정
} catch (e) {
	console.error('링크 경로 디코딩 오류:', originalHref, e);	document.addEventListener('DOMContentLoaded', () => {
			// 모든 <img> 태그의 src를 디코딩하여 수정
			document.querySelectorAll('img').forEach(img => {
				const originalSrc = img.getAttribute('src');
				if (originalSrc) {
					try {
						// 기존 src를 디코딩
						const decodedSrc = decodeURIComponent(originalSrc);
						img.setAttribute('src', decodedSrc); // 디코딩된 src를 다시 설정
					} catch (e) {
						console.error('이미지 경로 디코딩 오류:', originalSrc, e);
					}
				}
			});

			// 모든 <a> 태그의 href를 디코딩하여 수정
			document.querySelectorAll('a').forEach(link => {
				const originalHref = link.getAttribute('href');
				if (originalHref) {
					try {
						// 기존 href를 디코딩
						const decodedHref = decodeURIComponent(originalHref);
						link.setAttribute('href', decodedHref); // 디코딩된 href를 다시 설정
					} catch (e) {
						console.error('링크 경로 디코딩 오류:', originalHref, e);
					}
				}
			});
		});
}
}
});
});
