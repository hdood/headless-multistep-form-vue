import { h } from 'vue';

const Step: any = {
  name: 'Step',
  render() {
    return h('div', this.$slots.default());
  },
};

export default Step;
