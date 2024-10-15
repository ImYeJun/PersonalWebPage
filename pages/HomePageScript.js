document.addEventListener('DOMContentLoaded', () => {
	let observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.style.opacity = 1;
			}
			else{
				entry.target.style.opacity = 0;
			}
		});
	});
	
	// 모든 .animatedTextContainer 내부의 자식 요소들을 감시
	const animatedContainers = document.querySelectorAll(".animatedTextContainer");
	animatedContainers.forEach((container) => {
		const animatedTexts = container.querySelectorAll("*"); // 각 container의 자식 요소들
		animatedTexts.forEach((text) => {
			observer.observe(text); // 각 자식 요소에 observer 적용
		});
	});
});
