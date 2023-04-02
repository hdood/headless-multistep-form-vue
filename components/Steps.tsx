import { h, Transition } from "vue";

const Steps: any = {
	name: "Steps",
	render() {
		const currentStepId = this.$attrs.currentStepId;
		const slot = this.$slots;

		console.log(slot[0]());

		return h("div", this.$slots[0]()[0]);
	},
};
export default Steps;
