import { h } from "vue";

const Footer: any = {
	name: "Footer",
	render() {
		return h(
			"div",
			this.$slots.default({
				nextStep: this.$attrs.nextStep,
				previousStep: this.$attrs.previousStep,
				valid: this.$attrs.valid,
				start: this.$attrs.currentStepId == 0,
				end: this.$attrs.currentStepId == this.$attrs.steps - 1,
			})
		);
	},
};

export default Footer;
