
# Headless Vue.js Multi Step form
![Preview](https://hdood.github.io/-headless-multistep-form-vue-preview/assets/form.png)
## Demo
[Demo](https://hdood.github.io/-headless-multistep-form-vue-preview/)
## How To Use
This package provides you with some components that you are going to use to build you multi step form 

Basic example : 
	
	// App.vue
	
    <script>
	 import { MultiStapForm,
			  Header,
			  HeaderItem,
			  Steps,
			  Step,
			  Footer
			} from "headless-multistep-form-vue" 
    </script> 
    
    <tamplate> 
		<MultiStepForm>
			<Header>
				<HeaderItem v-slot="{ active }">
					<span :class=[active && 'color-blue-700']> 
						Personal Informations 
					</span>
					<span :class=[active && 'color-blue-700']> 
						Contact Informations 
					</span>
				</HeaderItem>
			</Header> 
			
			<Steps>
				<Step :validation="() => true"> 
					<input type="text" name="name" /> 
				</Step> 
				<Step :validation="() => true"> 
					<input type="text" name="name" /> 
					</Step> 
			</Steps>
			<Footer v-slot="{ nextStep, previousStep }"> 
				<button @click="nextStep">Next</button> 
				<button @click="previousStep">Previous</button> 
			</Footer> 
		</MultiStepForm>
    </template> 
    
the `Header` is where you want to display information about the current step and the next steps 

the `Steps` is where you put your form `Steps` . 

the `Step` component accepts a validation function if it returns true then we can go to the next step by running the `nextStep` function provided by the `Footer`

Each component exposes information about its current state via [slot props](https://vuejs.org/api/built-in-directives.html#v-slot) that you can use to conditionally apply different styles or render different content.

For example, the `HeaderItem` component exposes an `active` state, which tells you if the step is currently active .

## Slot Props

**`HeaderItem`**

`headerItem` component exposes the following states : 

`active` is a `boolean` that tells if the current item step is active .

`passed` is a `boolean` that tells if the current item step has been passed .

`stepsCount` is a `number` that tells the total number of steps. 

`currentStep` is a `number` tha tells the number of the current step .

**`Footer`**

`Footer` component exposes the following  states: 

`nextStep` is a `function` which navigates to the next step if the validation function of the `Step` component returns `true`. 

`previousStep` is a `function`which navigates to the previous step .

`valid` is a `computed` that returns a `boolean` tells if the current `Step` input is valid by running the `Step` validation  function. 

`start` is a `boolean` that tells if the current step is the starting step 
`end`is a `boolean` that tells if the current step is the last step 

 
