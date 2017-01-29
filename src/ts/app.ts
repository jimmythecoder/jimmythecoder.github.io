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
			window.location.href = 'mailto:james.harris@jharris.nz';
			return false;
		}
	}

	$(Init);
}
