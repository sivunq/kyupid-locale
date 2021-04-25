import chroma from "chroma-js";

export const getColor = (d, min,max) => {
	const scale = chroma.scale(["red","orange","yellow","green"]).domain([min, max]);
	return scale(d).hex();
}