# drone-test

[![Build
Status](http://52.43.127.218/api/badges/mcollina/drone-test/status.svg)](http://52.43.64.17/mcollina/drone-test)

This is a test project meant to test the complete CI flow from pushing code to a repository to deploying it to ECS via Docker image generation in ECR.

Hereby the file contained in this project are described:

- **.dockerignore**: file which contains all the need to be excluded files during a Docker image generation
- **.drone.sec**: this file contains the encrypted secrets used in the .drone.yml file
- **Dockerfile**: this Dockerfile is used by ECR to create a Docker image for the provided repository
- **server.js**: just and example webservice to test if the deployment to the ECS cluster really works.

In order to generate a `.drone.sec` file, the following command needs to be executed:

```sh
DRONE_SERVER=http://52.43.127.218 DRONE_TOKEN='your user token in drone.io' drone secure --repo mcollina/drone-test --in secrets.yml
```

The secret.yml file should be as following:

```yaml
environment:
  DRONE_CI_ACCESS_KEY: 'the access key of the AIM user granted in AWS'
  DRONE_CI_SECRET_KEY: 'the secret key of the AIM user granted in AWS'
```

Remember: Amazon ECR and Amazon ECS must be pre-configured before the CI pipeline can work!
