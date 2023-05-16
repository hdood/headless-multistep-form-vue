import { h, Transition } from "vue";

const Steps: any = {
	name: "Steps",
	render() {
		const currentStepId = this.$attrs.currentStepId;
		const slot = this.$slots;

		return h("div", this.$slots.default());
	},
};
export default Steps;
