## A GitHub Profile Commits Viewer

### Built With

- [TailwindCSS](https://tailwindcss.com/)
- [React.js](https://es.reactjs.org/)
- [axios](https://github.com/axios/axios)
- [Node.js](https://nodejs.org/es/)
- [Nest](https://nestjs.com/)
- [cors](https://www.npmjs.com/package/cors)
- [Github API](https://docs.github.com/es/rest)


## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

To run this project on your local machine or deploy it we need to use or have the following tools:

- **_Node.js_**

  https://nodejs.org/es/download/

- **_git_**

  https://git-scm.com/

### Run on Localhost

1. Clone the repo
   ```sh
   git clone https://github.com/joelvilcav/github-commits-viewer.git
   ```

#### 2 Run backend/

2.1 Open a terminal of your choice, enter the root directory and change to `backend/` directory

```sh
cd backend/
```

2.2 create a .env file and inside it include the following info

```sh
//.env file
PORT = 3000
GITHUB_API_URL = https://api.github.com
```

2.3 Install the dependencies

```sh
npm install
```

2.4 Run the scripts

```sh
npm start
```

#### 3 Run frontend/

3.1 Open a terminal of your choice, enter the root directory and change to `frontend/` directory

```
cd frontend/
```

3.2 Create an .env file in the root directory of `frontend/` inside this include the following info:

```sh
//.env file
VITE_API_URL = http://localhost:3000
```

3.3 Install the dependencies

```
npm install
```

3.3 finally run the scripts

```
npm run dev
```
