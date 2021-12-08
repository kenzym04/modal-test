# Path to Test Script: 

modal-test/Cypress-framework/cypress/integration/e2e test/confirmation.js

# How to Run the Tests

1. Install Wampserver, Node.js and Cypress
2. Cut Cypress-Framework folder and paste it in your workspace
3. The rest of the files, put them inside a folder called modal-test and move this folder to a folder called www inside Wampserver folder i.e. C:\wamp64\www\modal-test
4. Run your Wampserver or start server from the taskbar/system tray
5. Left click the Wampserver icon on the system tray, then click on the local host. The modal will open on your browser tab and you'll get your localhost url. Now just add /modal-test/index.html to the url. In my case it's http://localhost:8080/modal-test/index.html
6. In the terminal navigate to the cypress-framework directory and open your Cypress runner e.g. I use=> npm run cypress:open
7. On the cypress runner window, click on the script file, in my case it's confirmation.js to start the tests. NB: The server should be running and the index.html launched on your browser.
8. All tests should run and pass
