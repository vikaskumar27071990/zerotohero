// GitHubIntegrationController.cls
public with sharing class GitHubIntegrationController {
    @AuraEnabled(cacheable=true)
    //public static Map<String, Object> getGitHubUserData(String username) {
        public static Map<String, Object> getGitHubUserData() {
        HttpRequest req = new HttpRequest();
        //req.setEndpoint('https://api.github.com/users/' + username);
        req.setEndpoint('https://api.github.com/users/theprojectj27');
        
        req.setMethod('GET');
        req.setHeader('Accept', 'application/json');
        req.setTimeout(60000);

        Http http = new Http();
        HTTPResponse res = http.send(req);

        if (res.getStatusCode() == 200) {
            return (Map<String, Object>) JSON.deserializeUntyped(res.getBody());
        } else {
            throw new AuraHandledException('Failed to fetch GitHub user data: ' + res.getBody());
        }
    }
}
