# Angular Frontend Application

## Overview

This is the **frontend module** of the project, built using **Angular**. It is a modern, responsive, and scalable **Single Page Application (SPA)** that interacts with a backend via REST APIs. It uses Angular Material for a beautiful UI, NgRx for state management, and internationalization for multi-language support.

---

## Project Structure

The project follows the **component-based architecture** provided by Angular. Here is the directory structure of the project:

- **src/app**: Contains all feature modules, components, services, and shared modules.
  - **components/**: Angular components containing views and logic for different features.
  - **guards/**: Angular guards for protecting routes.
  - **services/**: All HTTP and shared services to interact with the backend API.
  - **store/**: Handles the application state using NgRx (actions, reducers, selectors, effects).
  - **views/**: Pages where the user can navigate to.
- **assets/**: Static resources such as images or JSON files for translation.
- **environments/**: Defines API URLs and other settings for development and production environments.

---

## Technologies

The project uses the following technologies:

- **Angular**: For building dynamic SPAs.
- **TypeScript**: The main programming language for Angular development.
- **Angular Material**: For the UI/UX, following Google’s Material Design principles.
- **NgRx**: To manage application-level state with actions and reducers.
- **RxJS**: To handle asynchronous streams and reactive programming.
- **ngx-translate**: For localization and internationalization of the app.
- **ngx-spinner**: For managing the loading status of the app.

### Key Packages:

| Library/Package                     | Version | Purpose                                       |
|-------------------------------------|---------|-----------------------------------------------|
| **@angular/core**                   | 19.2.x  | Angular framework core.                       |
| **@angular/material**               | 19.2.x  | Implement Material Design UI components.      |
| **NgRx (store, effects, devtools)** | 19.0.x  | State management.                             |
| **ngx-translate/core**              | 16.0.x  | Translation and localization management.      |
| **ngx-spinner**                     | 19.0.x  | Loading management.                           |
| **Angular CLI**                     | 19.2.x  | To scaffold and manage the Angular workspace. |
| **Karma & Jasmine**                 | Latest  | For unit testing.                             |

---

## Prerequisites

Ensure the following are installed on your system:

- **Node.js**: >= 22.x
- **npm** (Node Package Manager): Installed with Node.js
- A code editor like **VS Code** or **IntelliJ IDEA** (with Angular support).

---

## Running the Project

To set up and run the Angular application locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/damarur/rock-paper-scissors-frontend
   cd rock-paper-scissors-frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
  - Update the `src/environments/environment.ts` file with the backend API URL:
    ```typescript
    export const environment = {
        production: false,
        apiUrl: 'http://localhost:8080'
    };
    ```

4. **Start the development server**:
   ```bash
   npm start
   ```
   The application will run on **http://localhost:4200** by default.

5. **Build the project** (optional, for production):
   ```bash
   npm run build
   ```
   The production files will be generated in the `dist/` folder.

---

## Project Features

### 1. **Responsive UI**
- Built using Angular Material to ensure cross-browser compatibility and responsiveness for mobile, tablet, and desktop devices.

### 2. **State Management**
- Leverages NgRx to handle app state predictably with actions, reducers, and selectors.

### 3. **Localization**
- Supports multiple languages using **ngx-translate**.
- Add or update language files in the `src/assets/i18n` directory (`e.g., en.json, fr.json`).

### 4. **Routing**
- Implements a modular and lazy-loading approach for routes using Angular Router.

### 5. **Testing**
- Unit testing is implemented using **Karma** and **Jasmine**, with test cases written for components, services, and state.

---

## Scripts

Here are the most frequently used npm commands and their purposes:

| Command               | Purpose                                                     |
|-----------------------|-------------------------------------------------------------|
| `npm start`           | Launches the development server (`http://localhost:4200`).  |
| `npm run build`       | Builds the application for production (`dist/` folder).     |
| `npm test`            | Runs all unit tests using Karma and Jasmine.                |
| `npm run lint`        | Lints the codebase using ESLint.                            |
| `npm run prettier`    | Formats the codebase using Prettier.                        |

---

## Testing

To ensure application quality, both unit testing and end-to-end (E2E) testing are supported.

### Unit Testing
- **Framework**: Karma & Jasmine
- **Run Tests**:
  ```bash
  npm test
  ```
---

## Contribution Guidelines

To contribute to this Angular frontend project:

1. Fork the repository from GitHub.
2. Create a new feature branch:
   ```bash
   git checkout -b feature/<your-feature-name>
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Added <your-feature-name>"
   ```
4. Push to your forked repository:
   ```bash
   git push origin feature/<your-feature-name>
   ```
5. Submit a pull request for review.

---

## Contact

For any questions or suggestions, please reach out to:

- **Email:** [david.martinez.dev@gmail.com](mailto:david.martinez.dev@gmail.com)
- **GitHub:** [damarur](https://github.com/damarur)
