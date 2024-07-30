# VideoTube(YouTube-like) Backend 

## Introduction

This is a VideoTube backend project that covers almost all the functionalities of YouTube. 
Thanks to Chai Aur Code( Hitesh Choudhary), this is the implementation of what I learned from him in Chai Aur Backend.
Find more about his project in the documentation below.

## Important links

| Content            | Link                                                                        |
| -------------------| ----------------------------------------------------------------------------|
| API Documentation  | [click here](https://documenter.getpostman.com/view/37243730/2sA3kbfdKV)    |
| Model              | [click here ](https://app.eraser.io/workspace/9mC5jbYNziur5lozfGNw?origin=share)         |

## Features

### User Management:

- Registration, login, logout, password reset
- Profile management (avatar, cover image, details)
- Watch history tracking

### Video Management:

- Video upload and publishing
- Video search, sorting, and pagination
- Video editing and deletion
- Visibility control (publish/unpublish)

### Tweet Management:

- Tweet creation and publishing
- Viewing user tweets
- Updating and deleting tweets

### Subscription Management:

- Subscribing to channels
- Viewing subscriber and subscribed channel lists

### Playlist Management:

- Creating, updating, and deleting playlists
- Adding and removing videos from playlists
- Viewing user playlists

### Like Management:

- Liking and unliking videos, comments, and tweets
- Viewing liked videos

### Comment Management:

- Adding, updating, and deleting comments on videos

### Dashboard:

- Viewing channel statistics (views, subscribers, videos, likes)
- Accessing uploaded videos

### Health Check:

- Endpoint to verify the backend's health

## Technologies Used

- Node.js 
- Express.js
- MongoDB
- Cloudinary (must have an account)

## Installation and Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/UniverseVG/video-tube-backend.git
    ```

2. **Install dependencies:**

    ```bash
    npm install pnpm
    ```

2. **Install dependencies:**

    ```bash
    pnpm install
    ```

3. **Set up environment variables:**
    Create a .env in root of project and fill in the required values in the .env file using .env.sample file

4. **Start the server:**

    ```bash
    pnpm dev
    ```

## Contributing

If you wish to contribute to this project, please feel free to contribute.

## License

This project is licensed under [Varun GM](https://varungm.vercel.app/) But a special thanks to Hitesh Choudhary(Chai Aur Code).
