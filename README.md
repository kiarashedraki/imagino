<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).



Here’s a `README.md` file that explains how to start this NestJS project using the NestJS CLI and provides instructions on adding new endpoints.

```markdown
# My NestJS API with Swagger Documentation

This project is a simple API built with NestJS, using the Swagger module to auto-generate API documentation.

## Getting Started

### Prerequisites

To start this project, make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Install the NestJS CLI (if not already installed)**:
   ```bash
   npm install -g @nestjs/cli
   ```

2. **Create a New Project**:
   Use the NestJS CLI to create a new project using the template generator:
   ```bash
   nest new my-nestjs-project
   ```
   Navigate to your project directory:
   ```bash
   cd my-nestjs-project
   ```

3. **Install Swagger Module**:
   In the project directory, install the Swagger module for NestJS:
   ```bash
   npm install @nestjs/swagger
   ```

4. **Set Up Swagger**:
   Open `src/main.ts` and add the Swagger setup. This allows Swagger documentation to be automatically generated based on your controller decorators and metadata.

   ```typescript
   import { NestFactory } from '@nestjs/core';
   import { AppModule } from './app.module';
   import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

   async function bootstrap() {
     const app = await NestFactory.create(AppModule);

     const config = new DocumentBuilder()
       .setTitle('Example API')
       .setDescription('The API description')
       .setVersion('1.0')
       .build();

     const document = SwaggerModule.createDocument(app, config);
     SwaggerModule.setup('api', app, document);

     await app.listen(3000);
   }
   bootstrap();
   ```

5. **Run the Project**:
   Start the project using the NestJS development server:
   ```bash
   npm run start
   ```

6. **Access the Application**:
   - **API Endpoint**: You can access the example endpoint at `http://localhost:3000/hello`.
   - **Swagger Documentation**: Open `http://localhost:3000/api` in your browser to view the Swagger-generated API documentation.

## Adding New Endpoints

To add a new endpoint to this NestJS framework, follow these steps:

1. **Create a New Controller**:
   Use the NestJS CLI to generate a new controller. Replace `example` with the name of your controller:
   ```bash
   nest generate controller example
   ```

   This command creates a new controller file `example.controller.ts` in `src/example/`, along with a basic setup for the controller.

2. **Define the Route in the Controller**:
   Open the newly created controller file and define your route. Here’s an example:

   ```typescript
   import { Controller, Get } from '@nestjs/common';

   @Controller('example')
   export class ExampleController {
     @Get()
     getExample(): string {
       return 'This is an example endpoint!';
     }
   }
   ```

   In this example, the `@Controller('example')` decorator defines the base path as `/example`, and the `@Get()` decorator creates a GET endpoint at `/example`.

3. **Update Swagger Documentation**:
   By default, Swagger documentation is generated for all endpoints defined in your controllers. The new endpoint will automatically appear in the Swagger documentation at `http://localhost:3000/api`.

4. **Run the Application**:
   Start or restart the server:
   ```bash
   npm run start
   ```

   You can now access the new endpoint at `http://localhost:3000/example`.

5. **Optional - Adding Metadata for Swagger**:
   If you want to add more information for the Swagger documentation, you can add metadata to your endpoints using Swagger decorators. For example:

   ```typescript
   import { Controller, Get } from '@nestjs/common';
   import { ApiOperation, ApiResponse } from '@nestjs/swagger';

   @Controller('example')
   export class ExampleController {
     @Get()
     @ApiOperation({ summary: 'Get example message' })
     @ApiResponse({ status: 200, description: 'Successful response' })
     getExample(): string {
       return 'This is an example endpoint!';
     }
   }
   ```

This project is now set up with Swagger for auto-generated documentation. Each new endpoint you add with a controller and route will automatically appear in the documentation.

---

## Additional Resources

- [NestJS Documentation](https://docs.nestjs.com/)
- [NestJS Swagger Documentation](https://docs.nestjs.com/openapi/introduction)
- [Swagger UI](https://swagger.io/tools/swagger-ui/)

---

This README provides a basic setup and usage guide for creating and expanding a NestJS project with Swagger documentation.
```

This `README.md` includes step-by-step instructions to initialize, run, and extend the project, which should help anyone new to the project to get started quickly.