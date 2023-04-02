import { type VNode, h } from 'vue';
const Header : any =  {
  name: 'Header',
  render()  {
    const props = this.$attrs
    const currentStepId = props.currentStepId
    const stepsCount = props.stepsCount


    const slots : VNode[] = []
    this.$slots.default().map((slot : VNode, id : number)  => {
      slots.push(h(slot, { currentStepId , id, stepsCount }))
    })
    return h('div', slots)
  },
};

export default Header;
