import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import AuthService from 'shlack/services/auth';

export default class LoginFormComponent extends Component {
    @tracked
    userId = null;

    /**
     * @type {AuthService}
     */
    @service auth

    get isDisabled() {
        return !this.userId;
    }

    loginAsUserWithId(val) {
        console.log('UserId: ', val);
    }

    @action
    onSelectChanged(event) {
        this.userId = event.target.value;
    }

    @action
    onLoginFormSubmit(event) {
        const { target } = event
        const val = target.querySelector('select').value;
        event.preventDefault();
        this.auth.loginWithUserId(val);
    }
}
