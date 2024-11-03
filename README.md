# Sales Data Analytics Dashboard 📊

## 📌 Index
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Screenshots](#screenshots)
5. [Prerequisites](#prerequisites)
6. [Setup and Run Instructions](#setup-and-run-instructions)

---

### Introduction
The **Sales Data Analytics Dashboard** is an interactive data visualization tool designed to help users analyze and gain insights from sales data effectively. Built using ReactJS, TypeScript, and the Sisense Compose SDK, this dashboard provides users with dynamic filtering, highlighting, and customizable chart options, offering a comprehensive and user-friendly approach to understanding retail data trends and patterns.

---

### Features
- **Interactive Data Visualization**: Developed two interactive chart dashboards that enable users to filter, highlight, and manipulate sales data in real-time, enhancing data exploration.
- **Customizable and Dynamic Charts**: Leveraged callbacks for customization, allowing users to toggle between column and bar charts dynamically and apply filters seamlessly.
- **Enhanced Data Insights**: Implemented functionality to update displayed data across charts based on selected dimensions, ensuring accuracy and consistency in data representation.

---

### Technologies Used
- **Sisense Compose SDK**: Provides powerful interactive charting and customization capabilities within the dashboard.
- **ReactJS & TypeScript**: Enables a high-performance and responsive frontend interface.
- **Node.js**: Supports the project’s backend processes and dependency management.
- **Vite**: A fast build tool for efficient frontend development and deployment.

---

### Screenshots

#### ## Sales Data Analytics Dashboard
<p float="left">
   <img src="https://github.com/user-attachments/assets/0acd064d-c4fa-4499-b3c5-5d21498ce716" width="500" />
</p>
The **Sales Data Analytics Dashboard** allows users to interact with sales data through customizable charts. Users can apply various filters to view specific data segments and adjust chart types for a tailored visual experience. This setup provides real-time updates across charts, ensuring that users receive accurate and consistent insights based on their selected criteria.

---

### Prerequisites
Before setting up, ensure the following:

- **Node.js** (version 16 or higher)
- **npm** (Node package manager)

Additionally, access to a Sisense instance with:
- **Sample Retail Data Source**: Ensure this is available and includes all relevant, visible columns.
- **API Token**: An [API Token](https://sisense.dev/guides/sdk/authentication-security.html#api-token) for querying data.
- **CORS Settings**: Enable CORS for `http://localhost:5173` to allow requests from the local development server.

---

### Setup and Run Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd <repository-directory>

2.  **Install Dependencies**
   ```bash
      npm install

3. **Configure Environment Variables**

      Rename the .env.local.example file to .env.local.
      In .env.local, enter the Sisense instance URL and API Token.

4. **Start the Project**

      npm start    

