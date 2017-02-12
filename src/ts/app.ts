/// <reference path="../typings/skype.d.ts" />

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
		}
	}

	export class Email {
		constructor() {
			window.location.href = 'mailto:\u006a\u0061\u006d\u0065\u0073\u0040\u006a\u0068\u0061\u0072\u0072\u0069\u0073\u002e\u006e\u007a';
			return false;
		}
	}

	$(Init);
}
