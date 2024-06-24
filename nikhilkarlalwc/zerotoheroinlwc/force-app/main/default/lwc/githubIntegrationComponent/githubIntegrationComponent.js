// githubIntegrationComponent.js
import { LightningElement, track } from 'lwc';
import getGitHubUserData from '@salesforce/apex/GitHubIntegrationController.getGitHubUserData';

export default class GitHubIntegrationComponent extends LightningElement {
    @track searchTerm = '';
    @track userData;
    @track error;

    handleSearchTermChange(event) {
        this.searchTerm = event.target.value;
    }

    handleSearch() {
        getGitHubUserData({ username: this.searchTerm })
            .then(data => {
                this.userData = data;
                this.error = undefined;
            })
            .catch(error => {
                this.error = error.body.message;
                this.userData = undefined;
            });
    }
}
