import { h, ref, type VNode, Transition, computed } from "vue";

const currentStepId = ref(0);
const multiStepForm: any = {
	render(): VNode {
		const slots = this.$slots.default();

		const stepsWrapper = slots.find(
			(slot: any) => slot.type.name == "Steps"
		);
		const Footer = slots.find((slot: any) => slot.type.name == "Footer");
		const Header = slots.find((slot: any) => slot.type.name == "Header");

		const steps = stepsWrapper.children.default();

		const currentStep = steps[currentStepId.value];
		const last = currentStepId.value == steps.length - 1;

		// if the current step is a transition then we get the step from the Step child
		if (typeof currentStep.type == "function") {
			const step = currentStep.children
				.default()
				.find((step: any) => step.type.name == "Step");

			const submit = step?.props?.submit;

			if (!submit && last) {
				throw Error("the last step must have a submit function");
			}
			currentStep.props.validation = step?.props?.validation;
			currentStep.props.submit = submit;
		}

		const valid = computed(() => {
			if (!currentStep.props) return true;
			if (!currentStep?.props.validation) return true;
			return currentStep.props.validation();
		});

		function nextStep() {
			// if the current step is a transition we get the validation function of the step child

			const validation = currentStep?.props?.validation;
			if (!validation) {
				currentStepId.value++;
				return;
			}

			if (validation?.()) {
				if (!last) {
					currentStepId.value++;
					return;
				}
				const submit = currentStep?.props?.submit;

				if (!submit) {
					throw Error("the final step must have a submit function");
				}
				submit();
			}
		}
		function previousStep() {
			if (currentStepId.value != 0) currentStepId.value--;
		}

		function renderSteps() {
			const renderedSteps: any = [];
			steps.map((step: any, index: number) => {
				if (typeof step.type == "function") {
					if (index != currentStepId.value) {
						step!.children.default = () => [];
					}
					renderedSteps.push(step);
				} else {
					if (index == currentStepId.value) {
						renderedSteps.push(step);
					}
				}
			});
			return renderedSteps;
		}

		return h("div", [
			h(Header, {
				currentStepId: currentStepId.value,
				stepsCount: steps.length,
			}),
			h(stepsWrapper, null, { default: () => renderSteps() }),
			h(Footer, {
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
