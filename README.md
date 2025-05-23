# React Tailwind Forms Package

[![NPM Version](https://img.shields.io/npm/v/your-auth-package.svg)](https://www.npmjs.com/package/react-tailwind-forms)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Issues](https://img.shields.io/github/issues/your-username/your-auth-package.svg)](https://github.com/anil2050/react-tailwind-forms/issues)

A simple and customizable React package that provides **Login** and **Signup** forms.  
The forms accept a `backendUrl` prop to send login and signup requests to your backend API.

---

## 📚 Table of Contents

- [🚀 Installation](#-installation)
- [📦 Usage](#-usage)
- [🔧 Props](#-props)
- [💡 Features](#-features)
- [🛠️ Development Setup](#-development-setup)
- [📝 Example API Endpoints](#-example-api-endpoints)
- [🕋️ License](#-license)
- [🤝 Contributing](#-contributing)
- [🔗 Links](#-links)

---

## 🚀 Installation

To install the package in your React project, run the following command:

```bash
npm install react-tailwind-forms
```

---

## 📦 Usage

### 1. **Import the components**

Import the `Login` and `Signup` components into your React project:

```jsx
import { Login, Signup } from "react-tailwind-forms";
```

### 2. **Usage Example**

You can use the `Login` and `Signup` components like this:

```jsx
import React from "react";
import { Login, Signup } from "react-tailwind-forms";

const App = () => {
  return (
    <div>
      <h1>Welcome to Your App</h1>
      
      {/* Pass backend URL as a prop */}
      <Login backendUrl="http://localhost:5000" />
      
      {/* Or use the Signup form */}
      <Signup backendUrl="http://localhost:5000" />
    </div>
  );
};

export default App;
```

> Replace `"http://localhost:5000"` with your actual backend API URL.

---

## 🔧 Props

| Prop        | Type   | Required | Description                                     |
|-------------|--------|----------|-------------------------------------------------|
| backendUrl  | String | Yes      | The URL of your backend API for login/signup.   |

---

## 💡 Features

- **Login Form**: Sends a POST request with `email` and `password`.
- **Signup Form**: Sends a POST request with `name`, `email`, and `password`.
- **TailwindCSS Styling**: Pre-styled, but customizable forms.
- **Easy Integration**: Just pass your backend URL as a prop.

---

## 🛠️ Development Setup

If you want to contribute or make changes to this package:

### 1. Clone the repository

```bash
git clone https://github.com/anilgummula/react-tailwind-forms.git
cd react-tailwind-forms
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development environment

```bash
npm run dev
```

---

## 📝 Example API Endpoints

Your backend should be ready to handle these:

- **Login**: `POST /login`
  - Request Body: `{ email, password }`
  - Response: `{ token, user }`
  
- **Signup**: `POST /signup`
  - Request Body: `{ name, email, password }`
  - Response: `{ user }`

---

## 🕋️ License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

## 🤝 Contributing

We welcome contributions!  
Feel free to open issues and submit pull requests for improvements.

---

## 🔗 Links

- [GitHub Repository](https://github.com/anilgummula/react-tailwind-forms)
- [NPM Package](https://www.npmjs.com/package/react-tailwind-forms)

---

# 🚀 Happy Coding!

