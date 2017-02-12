/// <reference path="../typings/skype.d.ts" />
/// <reference path="../../node_modules/@types/d3/index.d.ts" />
/// <reference path="../../node_modules/@types/d3-color/index.d.ts" />
/// <reference path="../../node_modules/@types/d3-scale/index.d.ts" />
/// <reference path="../../node_modules/@types/d3-hierarchy/index.d.ts" />

namespace app {

	export class Init {
		constructor() {

			 Skype.ui({
				 "name": "dropdown",
				 "element": "SkypeButton",
				 "participants": ["rallyrulz"]
			 });

			 $('section.knowledge .range').each(function(index: number, elem: Element) {
				 let leftOffset = $(this).data('value') + '%';

				 $('.handle',this).css('left', leftOffset);
			 });

			 $('section.skills .skills-list .meter').each(function(index: number, elem: Element) {
				 let value 		= parseInt($(this).data('value'), 10);
				 let leftOffset = value + '%';
				 let opacity 	= value / 100;

				 $('.inner',this).css({'width':  leftOffset, opacity: opacity});
			 });

			 let skillsChart = new SkillsChart();

			 skillsChart.render();
		}
	}

	export class Email {
		constructor() {
			window.location.href = 'mailto:\u006a\u0061\u006d\u0065\u0073\u0040\u006a\u0068\u0061\u0072\u0072\u0069\u0073\u002e\u006e\u007a';
			return false;
		}
	}
	

	class SkillsChart {

		constructor() {
			// init
		}

		render() {

			let margins = 2;
			let width = 650;

			let svg = d3.select("svg.skills-chart");
			let g = svg.append("g").attr("transform", "translate(2,2)");
			let format = d3.format(",d");

			var pack = d3.pack()
				.size([width - 4, width - 4]);

			d3.json("js/skills.json", function(error: any, root: any) {

				if (error) {
					throw error;
				}

				root = d3.hierarchy(root)
					.sum(function(d: any) { return d.size; })
					.sort(function(a: any, b: any) { return b.value - a.value; });

				var node = g.selectAll(".node")
					.data(pack(root).descendants())
					.enter().append("g")
					.attr("class", function(d: any) { return d.children ? "node" : "leaf node"; })
					.attr("transform", function(d: any) { return "translate(" + d.x + "," + d.y + ")"; });

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

	$(Init);
}
