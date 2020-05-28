function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}


const avatar = document.querySelector('#player');
const coin = document.querySelector('#coin');

const moveCoin = () => {
	const y = Math.floor(Math.random() * window.innerHeight)
	const x = Math.floor(Math.random() * window.innerWidth)
	coin.style.top = `${y}px`
	coin.style.left = `${x}px`
};

const extractPos = (pos) => {
	if(!pos) return 0;
	return parseInt(pos.slice(0, -2))
};

const moveVertical = (element, amount) => {
	const currTop = extractPos(element.style.top);
	element.style.top = `${currTop + amount}px`
}
const moveHorizontal = (element, amount) => {
	const currLeft = extractPos(element.style.left);
	element.style.left = `${currLeft + amount}px`
}
window.addEventListener('keyup', function(e){
	const currTop = extractPos(avatar.style.top);
	const currLeft = extractPos(avatar.style.left);
	if(e.keyCode === 40){
		moveVertical(avatar, 50)
	}
	else if (e.keyCode === 38){
		moveVertical(avatar, -50)
	}
	else if(e.keyCode === 39){
		moveHorizontal(avatar, 50)
		avatar.style.transform = 'scale(1,1)'
	}
	else if(e.keyCode === 37){
		moveHorizontal(avatar, -50)
		avatar.style.transform = 'scale(-1,1)'
	}
	if(isTouching(avatar, coin)) {moveCoin()};
	
	})


