// import {computed, observer} from '@ember/object';
import Controller from '@ember/controller';
// import {empty} from '@ember/object/computed';
import {match, not} from '@ember/object/computed';
export default Controller.extend({

  headerMessage: 'Comming Soon',
  emailAddress: '',
  // isDisabled: computed('emailAddress', function() {
  //   return this.get('emailAddress') === '';
  // }),

  isValid: match('emailAddress',/^.+@.+\..+$/),

  isDisabled: not('isValid'),

  actions: {
    saveInvitation() {
      alert(`Saving of the follwing email address is in progress: ${this.get('emailAddress')}`);
      this.set('responseMessage',`Thank you! We've just saved your email: ${this.get('emailAddress')}`);
    }
  }

});
