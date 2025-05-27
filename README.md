# Flat Roof Specialist Landing Page (Next.js)

This project is a multi-language (English/Dutch) landing page for a flat roof specialist business, built with Next.js and styled with a modern, Tesla-inspired aesthetic. It features internationalization using `next-international`.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

* [Node.js](https://nodejs.org/) (version 18.x or later recommended)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (or [pnpm](https://pnpm.io/))

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <repository-directory-name>
    ```

2.  **Install dependencies:**
    Choose your preferred package manager:

    * Using npm:
        ```bash
        npm install
        ```
    * Using yarn:
        ```bash
        yarn install
        ```
    * Using pnpm:
        ```bash
        pnpm install
        ```

3.  **Set up environment variables (if any):**
    If your project requires environment variables (e.g., API keys, specific configurations), create a `.env.local` file in the root of the project by copying the example file (if you have one like `.env.example`):
    ```bash
    cp .env.example .env.local
    ```
    Then, update `.env.local` with your specific values. (Initially, for this project, we haven't defined any, but it's good practice to include this step).

### Running the Development Server

Once the dependencies are installed, you can start the development server:

* Using npm:
    ```bash
    npm run dev
    ```
* Using yarn:
    ```bash
    yarn dev
    ```
* Using pnpm:
    ```bash
    pnpm dev
    ```

This will typically start the application on `http://localhost:3000`. Open this URL in your web browser to see the application running. The application will automatically reload if you change any of the source files.

---

This provides a solid foundation for your README. You can expand it later with sections on:

* Project Structure
* Available Scripts (build, lint, etc.)
* Technologies Used
* Deployment
* Contributing
* License