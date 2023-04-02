import { h, ref, type VNode, Transition, computed } from "vue";

const currentStepId = ref(0);
const multiStepForm: any = {
	render(): VNode {
		const slots = this.$slots.default();

		const stepsWrapper = slots.find(
			(slot: any) => slot.type.name == "Steps"
		);
		const footer = slots.find((slot: any) => slot.type.name == "Footer");
		const Header = slots.find((slot: any) => slot.type.name == "Header");

		const steps = stepsWrapper.children
			.default()
			.filter((step: any) => step.type.name == "Step");

		const currentStep = steps[currentStepId.value];

		const valid = computed(() => {
			if (!currentStep.props) return true;
			if (!currentStep?.props.validation) return true;
			return currentStep.props.validation();
		});

		function nextStep() {
			if (!currentStep.props) {
				currentStepId.value++;
				return;
			}
			if (!currentStep.props.validation) {
				currentStepId.value++;
				return;
			}
			if (
				currentStepId.value <= steps.length - 1 &&
				currentStep.props.validation()
			) {
				if (currentStep.props.submit) {
					currentStep.props.submit();
				} else {
					currentStepId.value++;
				}
			}
		}
		function previousStep() {
			if (currentStepId.value != 0) currentStepId.value--;
		}

		return h("div", [
			h(Header, {
				currentStepId: currentStepId.value,
				stepsCount: steps.length,
			}),
			h(
				stepsWrapper,
				h(
					Transition,
					{
						enterActiveClass:
							"transition-all absolute duration-300 delay-300",
						leaveActiveClass:
							"transition-all absolute duration-300",
						enterFromClass: "opacity-0 translate-x-4",
						leaveToClass: "opacity-0 -translate-x-4",
					},
					() => h(currentStep, { key: currentStepId.value })
				)
			),
			h(footer, {
				nextStep,
				previousStep,
				valid,
				currentStepId: currentStepId.value,
				steps: steps.length,
			}),
		]);
	},
};
export default multiStepForm;
