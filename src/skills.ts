import * as d3 from 'd3';

export default class SkillsChart {

	constructor(element: string) {
		this.render(element);
	}

	render(element: string) {

		let margins = 2;
		let width = 650;

		let svg = d3.select(element);
		let g = svg.append("g").attr("transform", "translate(2,2)");
		let format = d3.format(",d");

		var pack = d3.pack()
			.size([width - 4, width - 4]);

		d3.json<ISkills>("/assets/data/skills.json").then((data) => {

			if(!data) {
				return false;
			}

			const root = d3.hierarchy<ISkills>(data)
				.sum(function(d) { return d.size; })
				.sort(function(a: any, b: any) { return b.value - a.value; });

			const node = g.selectAll(".node")
				.data(pack(root).descendants())
				.enter().append("g")
				.attr("class", function(d) { return d.children ? "node" : "leaf node"; })
				.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

			node.append("title")
				.text(function(d: any) { return d.data.name + "\n" + format(d.value); });

			node.append("circle")
				.attr("r", function(d: any) { return d.r - margins; });

			node.filter(function(d: any) { return !d.children; }).append("text")
				.attr("dy", "0.3em")
				.text(function(d: any) { return d.data.name.substring(0, d.r / 3); });
		});
	}
}

export interface ISkills {
	name: string;
	size: number;
	children?: ISkill[];
}

interface ISkill {
	name: string;
	size: number;
	children?: ISkill[];
}