import Ember from 'ember';
import { calculatePosition } from 'ember-basic-dropdown/utils/calculate-position';

export default Ember.Controller.extend({
  showInput: true,

  actions: {
    calculatePosition() {
      let result = calculatePosition(...arguments);
      result.style.top = result.style.top - 15;
      return result;
    },

    contentClicked() {
      alert('content clicked');
    },

    inputFocus() {
      this.set('showInput', false);
    }
  }
});