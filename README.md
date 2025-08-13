# ReminderService

A Node.js service for scheduling, sending, and managing email reminders.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Cron Job](#cron-job)
- [License](#license)

---

## Overview

ReminderService allows users to create email reminders, which are sent automatically at the scheduled time. It supports managing notification tickets, sending emails via Gmail, and updating email statuses.

---

## Features

- Create and manage email reminders
- Automatically send pending emails at scheduled intervals
- Update ticket status after sending (SUCCESS / PENDING)
- JWT-based user authentication
- Role-based access control (Admin/User)

---

## Tech Stack

- Node.js
- Express.js
- Sequelize ORM
- MySQL / PostgreSQL
- Nodemailer
- Node-cron
- JWT for authentication

---

## Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project folder
cd ReminderService

# Install dependencies
npm install
```
