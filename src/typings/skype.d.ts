declare namespace Skype {

	interface SkypeStatic {
		ui(config: IConfig): void;
	}

	interface IConfig {
		name: string;
		element: string;
		participants: string[];
	}
}

declare var Skype: Skype.SkypeStatic;