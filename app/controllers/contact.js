import Controller from '@ember/controller';
import {match, not,gte,and} from '@ember/object/computed';

export default Controller.extend({
  emailAddress: '',
  message: '',
  isValid: match('emailAddress',/^.+@.+\..+$/),
  isLongEnough: gte('message.length',5),
  isBoth: and('isValid','isLongEnough'),
  isDisabled: not('isBoth'),

  actions: {
     sendMessage: function() {
       // get the property values
       var email = this.get('emailAddress');
       var message = this.get('message');
       // alert browser
       alert('Sending your message in progress... ');

       // format response and reset the messge
       var responseMessage = 'From: ' + email + ', Message: ' + message;
       this.set('responseMessage', responseMessage);
       this.set('emailAddress', '');
       this.set('message', '');
     }
   }
});
