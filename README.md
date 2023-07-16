# Angular-Post-Viewer

This is an Angular application that fetches 100 posts from the JSONPlaceholder API and renders them in a grid format. Each post is displayed as a separate component. The application uses RxJS for state management and follows best practices for organizing Angular modules.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:
    `git clone https://github.com/cihankandis/Angular-Post-Viewer.git`
2. Navigate to the project directory:
    `cd Angular-Post-Viewer`
3. Install dependencies:
    `npm install`
4. Start the development server:
    `ng serve`
5. Open your browser and visit `http://localhost:4200` to see the application running.

## Features

- The application fetches 100 posts from the JSONPlaceholder API and displays them as a grid of components.
- By default, each post's title is shown. Clicking on a post component reveals the ID, and clicking again reveals the user ID. Clicking once more reveals the post's body.
- The application uses RxJS for state management, allowing for a reactive and efficient approach to handling data.

## Post Display
Please note that instead of using squares for the post display, rectangles are used to accommodate the varying lengths of the post content. This decision was made to ensure that long posts can be fully displayed without overflowing the container.

Additionally, the application provides keyboard navigation and interaction options for a better user experience. Users can utilize the following keyboard shortcuts:
- Use the **Tab** button to focus on the next post in the grid.
- Use **Shift + Tab** to move the focus back to the previous post.
- Press the **Enter** button to change the content of the post.

These keyboard shortcuts enhance the accessibility and usability of the application, allowing users to easily navigate through the posts and interact with their content.

## Store Configuration

The application leverages NgRx for state management, which is built on top of Redux principles. The `PostsModule` defines and configures its own store for managing the posts-related state.

The store configuration is as follows:

- `StoreModule.forFeature('posts', postsReducer)`: Sets up the store to include a feature state named 'posts' and uses the `postsReducer` function to handle state changes specific to the 'posts' feature.

The feature state, actions, reducer, effects, and selectors work together to manage and interact with the posts-related data in a consistent and predictable manner.

It's worth noting that in addition to the store configuration in the `PostsModule`, the `AppModule` also sets up a global store configuration using `StoreModule.forRoot({})`. This allows for the management of application-wide state.

By defining the store configuration at the root level in the `AppModule`, it ensures that the store is available throughout the application and allows for cross-feature interactions and a centralized state management approach.

This separation of the store configuration into both the `AppModule` and the `PostsModule` provides a modular and scalable approach to state management, allowing for flexibility and encapsulation of feature-specific state management within each module while still maintaining a global application state.

## Change Detection Strategy

The `post-list` and `post` components have been configured with `ChangeDetectionStrategy.OnPush` for improved performance. This change detection strategy enables change detection only when the input properties of the components change.

By utilizing `ChangeDetectionStrategy.OnPush`, the components can benefit from better performance and optimized rendering, especially when dealing with a large number of posts in the grid.

## Motivation and Choices

- Angular was chosen as the framework for this project due to its powerful features, such as component-based architecture and built-in support for reactive programming with RxJS.
- RxJS was used for state management as it provides a convenient and efficient way to handle complex asynchronous operations and manage application state.
- The JSONPlaceholder API was used as a data source to simulate real-world API requests and provide sample data for demonstration purposes.
- The modular structure was chosen to promote code reusability and maintainability. Components and state-related files were organized into separate folders to improve readability and maintain a clear project structure.

## Gotchas

- Ensure that you have a stable internet connection to fetch data from the JSONPlaceholder API.
- The JSONPlaceholder API is a mock API and may have limitations or intermittent availability.

| Statements                  | Branches                | Functions                 | Lines             |
| --------------------------- | ----------------------- | ------------------------- | ----------------- |
| ![Statements](#statements#) | ![Branches](#branches#) | ![Functions](#functions#) | ![Lines](#lines#) |