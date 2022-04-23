# Overview
This repository demonstrates a basic example of a problem I have identified with the firebase SDK. The issue is tracked at https://github.com/firebase/firebase-js-sdk/issues/6174

# Problem Description
When a new user (email is not yet registered with firebase authentication) signs in using Google Login, and the app
is refreshed immediately after (approx 10 seconds), the authenticated state is lost.

On closer inspection, it was identified that a certain network call initiated by the firebase SDK upon page refresh
errors out with a 400 TOKEN_EXPIRED error message.

# Steps To Reproduce
1. Update firebase.js with your project's firebase credentials
2. Run the application using yarn start
3. Open the browser console and click on Sign Up and observe both the console and the network tab.

# Observations
Upon successful login (and register) The auth state changed log will fire with the User object. 
After 10 seconds, a page refresh will be triggered, after which the auth state changed log will be null.
If you inspect the network tab, the request to https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyALv0Y-mNuTQctOSiKMqueFyqKbuz47vjY
will show a 400 TOKEN_EXPIRED error.
