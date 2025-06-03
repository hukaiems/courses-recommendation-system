# Courses Recommendation System

## Overview
The Courses Recommendation System is a web application designed to help users find students and view recommended courses based on their profiles. The application utilizes a search feature to find students and displays relevant course recommendations.

## Project Structure
- `src/app/components/student-search-section.tsx`: This file contains the `StudentSearchSection` component, which handles the search functionality for students and displays their details along with recommended courses. It manages state for search queries, student data, and recommended courses, and includes functions for fetching data from an API.

- `package.json`: This file contains metadata about the project, including dependencies, scripts, and project configuration for npm.

- `tsconfig.json`: This file is the TypeScript configuration file that specifies the compiler options and the files to include in the compilation.

- `README.md`: This file provides documentation for the project, including setup instructions, usage, and features.

## Features
- Search for students by name.
- Display student details including gender, school, and course order.
- Toggle to view recommended courses for each student.
- Fetch recommended courses from an external API.

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd courses-recommendation-system
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
1. Start the development server:
   ```
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000` to access the application.

## Technologies Used
- React
- TypeScript
- Axios for API requests
- Lucide-react for icons

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.