import { h } from "vue";

const HeaderItem: any = {
	name: "HeaderItem",
	render() {
		const currentStepId = this.$attrs.currentStepId;
		const id = this.$attrs.id;
		const stepsCount = this.$attrs.stepsCount;

		console.log(stepsCount);

		return h(
			"div",
			this.$slots.default({
				active: currentStepId == id,
				stepsCount: stepsCount,
				currentStep: currentStepId + 1,
				passed: currentStepId > id,
			})
		);
	},
};

export default HeaderItem;
