# week-code-challenge

This is my week 2 code challenge

#### Brief description of application, {18-Aug-2024}

The **Galactic Bot Army** web app allows a galactic overlord to browse, view, and manage a collection of robots. Users can view detailed profiles of each bot, enlist them into their army, and manage their enlisted bots. The app demonstrates key React concepts such as components, props, state management, events, and data fetching. Users can also sort and filter bots based on various attributes and ensure only one bot per class is enlisted into the army.

#### By

This project was created and is sole property of Ian Dan Cheruiyot

## Features

- **View All Bots**: Browse through a list of all available bots in the `BotCollection` component.
- **View Bot Details**: Click on a bot to view its detailed profile in the `BotSpecs` component.
- **Enlist Bot**: Add a bot to your army by enlisting it. Each bot can only be enlisted once.
- **Release Bot**: Remove a bot from your army by clicking on it in the `YourBotArmy` component.
- **Discharge Bot**: Permanently remove a bot from your army and delete it from the backend by clicking the "x" button.
- **Sort Bots**: Sort bots based on health, damage, or armor using the `SortBar` component.
- **Filter Bots**: Filter bots by their class to narrow down your selection.
- **One Bot Per Class**: Only one bot from each class can be enlisted into the army.

## Setup/Installation Requirements

* One would need either linux or wsl for window users
* Node.js (v12 or higher)
* npm (v6 or higher)
* A copy of visual studio code installed
* A github account

1. Open your terminal and go to the directory you wish to work from.
2. Go to the following url using ur github account git@github.com:IanDanCheruiyot/codech2.git
3. Go to the code tab and clone the ssh key
4. Go back to the terminal and type git clone <-followed by the ssh key you copied /cloned ->
5. Enter your new cloned repository and type in code .
6. Now install the dependencies, on your terminal type npm install
7. Start the JSON server by typing json-server --watch db.json --port 8000
8. Open an new terminal on your visual studio code and type npm start

## Technologies Used

**React**: a javaScript library for building user interfaces.
**JSON Server**: for testing and prototyping.
**CSS**: custom styles for user interface.

## Support and contact details

For any issues please email me at ian.cheruiyot1@student.moringaschool.com