## Shipper
### Object Detection API - Frontend

Frontend for the Object Detection used to identify Ships from Satellite Imagery.

Traffic Management System for Coastal Regions.
Developed for **ASEAN-India Hackathon** 2021 - PS7 and won **Encouragement Award**.


## Local Development

### Prerequisites

-   [Node.js](https://nodejs.org/) Installed

### Install Dependencies

```bash
yarn install
or
npm install
```

### Start Development Server

```bash
yarn dev
or
npm run dev
```

This will start a develoment server for the frontend on [http://localhost:3000](http://localhost:3000)

---

## Deployment

### Create a production build

This will create a production build that can be deployed.

```bash
yarn build
or
npm run build
```

For Deploying, you can use Docker (with Docker Compose).

```bash
docker-compose up --build
```

---

## Getting Started

Open the application in your web browser on [http://localhost:3000](http://localhost:3000)

Upload an Image and the model will identify ships from the image, then the result will be displayed.

---

## LICENSE
[Eclipse Public License (EPL)](https://www.eclipse.org/legal/epl-2.0/)

You are free to modify the code. Redistributions are not allowed without prior request from the original author. You are obligated to include the full **license** and the **copyrights**.