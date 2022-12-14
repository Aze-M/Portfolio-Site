
export function setActive(el: string) {
	for (let el of document.getElementsByClassName("button")) {
		el.classList.remove("active");
	}
	document.getElementById(el)?.classList.add("active");
}

export function setColorClass(el: string, clrclass: string) {
	let element = document.getElementById(el);

	if (!element) {
		return new Error("could not find element")
	}

	element?.classList.remove("blue");
	element?.classList.remove("ngray");
	element?.classList.remove("lora");
	element?.classList.remove("dora");

	element?.classList.add(clrclass);
}

export function setBorderRad(el: string, brdclasses: Array<string>) {
	let element = document.getElementById(el);

	if (!element) {
		return new Error("could not find element")
	}

	element.classList.remove("tl_round")
	element.classList.remove("bl_round")

	if (brdclasses) {
		for (let cnt = 0; cnt < brdclasses.length; cnt++) {
			element.classList.add(brdclasses[cnt]);
		}
	}
}

export function toggleInactive(el: string) {
	let element = document.getElementById(el);

	element?.classList.remove("active-cnt");

	console.log("Started timer")
	setTimeout(() => {
		console.log("timer done")
		element?.classList.add("active-cnt");
	}, 1000)

}

export function toggleInactiveClass(cls: string) {
	let elements = document.getElementsByClassName(cls);

	for (let element of elements) {
		element?.classList.remove("active-cnt");

		console.log("Started timer")
		setTimeout(() => {
			console.log("timer done")
			element?.classList.add("active-cnt");
		}, 1000)
	}
}


export function setBGColor(color: string) {
	let element = document.getElementById("all")

	if (!element) { return };

	element.style.backgroundColor = `var(${color})`;
}

export function isActive(el: string) {
	let element = document.getElementById(el);

	if (element?.classList.contains("active")) {
		return true
	}

	return false
}