# [VSBuddies](https://vsbuddies.netlify.app)
> A simple way to meet new friends and chat with your friends.
# Features
### Supports Dark and Light mode
![LightDark](https://user-images.githubusercontent.com/44966242/148548114-719434bb-13ae-44d2-979c-ee1d9409db96.png)
### Login with github
### Customize you profile and your interests
![Profile](https://user-images.githubusercontent.com/44966242/148548144-c9aafc7f-1bc7-4927-af8f-8b043941496b.png)
### Find other developers with common interests
![Connect](https://user-images.githubusercontent.com/44966242/148548167-0a8ce685-4fac-4222-816e-577e5b2781fc.png)
### Send them friend requests and recieve friend requests from other developers
### Remove friends you dont want
### Get match percentage on the basis of 
+ Common Interests
+ College
+ Your top two languages
+ Your extensions*
### Your Preference in dark and light themes
## Login to the VSCode extension to be able to chat with your friends while coding
![Extension](https://user-images.githubusercontent.com/44966242/148548190-284fa183-4589-4952-b433-dba112a40f3f.png)

[Link To Extension](https://marketplace.visualstudio.com/items?itemName=Lohitaksha.vsbuddies)
### Your extension list gets auto updated so your match percentage remains accurate*

> *Your extensions will only be fetched though the vscode extension

# How to deploy locally
## Website and firebase server
1. Create a Firebase account, and setup a firestore database and enable github outh(remember to add localhost to authorised domains)
2. Create a .env file with the keys from .env.example file and the values from firebase panel(names should be self-explanatory)
3. Replace the url in src/Components/Details/Details.js and src/Components/Friends/Friends.js from https://vsbuddies.netlify.app to localhost:3000
4. In the firestore database create a collection with the name Users
