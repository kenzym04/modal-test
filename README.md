# How to Run the Tests

1. Install Wampserver, Node.js and Cypress
2. Cut Cypress-Framework folder and paste it in your workspace
3. The rest of the files, put them inside a folder called modal-test and move this folder to a folder called www inside Wampserver folder i.e. C:\wamp64\www\modal-test
4. Run your Wampserver or start server from the taskbar/system tray
5. Left click the Wampserver icon on the system tray, the click on the local host. It will open on your browser tab and youll get your localhost address and just add /modal-test/index.html
6. In the terminal navigate to the cypress-framework directory and open your Cypress runner e.g. npm run cypress:open
7. On the cypress runner window, click on the script file, in our case it's confirmation.js to start the tests. NB: The server should be running and the index.html launched in your browser.
8. All tests should run and pass
