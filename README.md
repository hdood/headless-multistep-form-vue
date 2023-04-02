
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
