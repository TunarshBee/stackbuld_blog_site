# Stackbuld


A simple blogging platform built with Angular, NgRx for state management, Angular Material for UI components, and integrated with a backend API for managing blog posts and comments.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.9.

## Features

- CRUD functionality for blog posts (Create, Read, Update, Delete).
- List and single post view.
- Pagination for blog posts.
- Search functionality for posts by title.
- Adding comments to posts.
- Clean and responsive UI.
- Well-organized and documented code.

## Technologies Used

- **Angular**: Frontend framework for building the application.
- **NgRx**: State management library for managing application state.
- **Angular Material**: UI framework for building responsive and aesthetically pleasing components.
- **RxJS**: Reactive Extensions library for handling asynchronous operations.
- **HttpClient**: Angular module for making HTTP requests to the backend API.

## Project Structure

The project follows a modular structure:

- **Components**: Angular components for different sections of the application.
- **Services**: Angular services for interacting with the backend API.
- **Actions**: NgRx actions for triggering state changes.
- **Reducers**: NgRx reducers for handling state changes.
- **Effects**: NgRx effects for managing asynchronous operations.
- **Selectors**: NgRx selectors for selecting specific parts of the state.
- **Models**: TypeScript interfaces defining the structure of the application state.

## Setup Instructions

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/angular-blogging-platform.git
    ```

2. **Install dependencies:**

    ```bash
    cd angular-blogging-platform
    npm install
    ```

3. **Run the application:**

    ```bash
    ng serve
    ```

    Open your browser and navigate to `http://localhost:4200/` to view the application.

## API Integration

Ensure your backend API is properly configured and replace the API URLs in the `BlogService` with your actual API endpoints.


---


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Development

For local development and testing, you can use the Angular development server. Make sure to follow best practices, adhere to the style guide, and keep the codebase clean and well-documented.

## Contributions

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


