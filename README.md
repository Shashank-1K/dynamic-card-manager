# Dynamic Card Manager

A responsive and interactive single-page application built with Angular that allows users to dynamically manage a collection of cards. Users can add new cards, edit the title and description of existing cards, and delete cards, with all changes persisted through a mock backend API.

<!-- You can replace this with a real screenshot or GIF of your app -->

## ✨ Key Features

* **Dynamic Card Display:** Cards are loaded from a backend and displayed in a clean, responsive grid.
* **Full CRUD Operations:**
    * **Create:** Add new cards to the collection with a single click.
    * **Read:** View all cards fetched from the API.
    * **Update:** Edit a card's title and description in a seamless modal dialog.
    * **Delete:** Remove cards from the collection.
* **Data Persistence:** All changes are saved to a mock JSON database, so data persists between sessions.
* **Modern & Aesthetic UI:** A professional and visually appealing user interface with a dark theme, frosted glass effects, and smooth animations.
* **Fully Responsive:** The layout is optimized for a great user experience on desktops, tablets, and mobile devices.

## 🛠️ Tech Stack

* **Frontend:** [Angular](https://angular.io/)
* **UI Components:** [Angular Material](https://material.angular.io/)
* **Mock Backend:** [json-server](https://github.com/typicode/json-server)
* **Styling:** CSS with Custom Properties

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* [Node.js](https://nodejs.org/) (which includes npm) installed on your system.
* [Angular CLI](https://angular.io/cli) installed globally:
    ```sh
    npm install -g @angular/cli
    ```

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git)
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd your-repository-name
    ```
3.  **Install frontend dependencies:**
    ```sh
    npm install
    ```
4.  **Install `json-server` (if not already installed from `package.json`):**
    ```sh
    npm install -g json-server
    ```

## 🏃 Running the Application

This project requires two processes to be running simultaneously in separate terminals: the Angular development server and the mock backend API.

1.  **Start the Mock Backend Server:**
    Open a terminal in the project root and run:
    ```sh
    npm run json-server
    ```
    This will start the mock API, which will be available at `http://localhost:3000`. It will watch the `db.json` file for changes.

2.  **Start the Angular Application:**
    Open a **second terminal** in the project root and run:
    ```sh
    npm start
    ```
    The application will be served at `http://localhost:4200/`. Open this URL in your browser to use the app.

## 📝 API Endpoints (Mock)

The `json-server` provides the following RESTful API endpoints based on the `db.json` file:

* `GET /cards` - Fetches all cards.
* `POST /cards` - Creates a new card.
* `PUT /cards/:id` - Updates an existing card.
* `DELETE /cards/:id` - Deletes a card.
