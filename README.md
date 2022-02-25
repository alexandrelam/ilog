<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/alexandrelam/ilog">
    <img src="https://user-images.githubusercontent.com/25727549/155026814-3c2421c2-099c-484e-aeba-fd0fc2c8d25c.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">ILOG: Koa Project</h3>

  <p align="center">
    A CQRS and event sourcing based microservice architecture with Koa
    <br />
    <a href="https://github.com/alexandrelam/ilog"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/alexandrelam/ilog">View Demo</a>
    ·
    <a href="https://github.com/alexandrelam/ilog/issues">Report Bug</a>
    ·
    <a href="https://github.com/alexandrelam/ilog/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://github.com/alexandrelam)

The goal of this project is to learn how to write a backend app using Koa. This app should be a RESTful API that can handle books, authors and genre in a MongDB database.

To spice up this project a little bit, we decided to extend the scope of the project and base it on microservices. We tried to follow a CQRS and event sourcing ideology. We used Koa for our query and write service, Kafka as our event store and MongoDB for our database. We also added KafkaDrop and OpenApi documentation.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- [Koa.js](https://koajs.com/)
- [Typegoose](https://typegoose.github.io/typegoose/)
- [Koa Router](https://github.com/ZijianHe/koa-router)
- [Docker](https://www.docker.com/)
- [Kafka](https://kafka.apache.org/)
- [MongoDB](https://www.mongodb.com/)
- [OpenApi](https://swagger.io/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

In this section you will learn how to get the project up and running.

### Prerequisites

You need a few softwares before things works properly.

- npm with node

  ```sh
  npm install npm@latest -g
  ```

- docker (and don't forget docker-compose if you are on linux)

### Installation

_Below is an example of how you can install the dependancies and set up the app._

1. Clone the repo
   ```sh
   git clone https://github.com/alexandrelam/ilog
   ```
2. Install npm dependancies for the whole repo
   ```sh
   npm install
   ```
3. Install npm dependancies for the different services
   ```sh
   cd api && npm install
   ```
   ```sh
   cd .. && cd write-service && npm install
   ```
4. docker-compose up!

   ```sh
   docker-compose up
   ```

   _Make sure no other app are running on port 4000, 9000, 2181, 27017, 29092._
   _If the app is not starting because of kafka not initiating fast enough just shutdown the servers and docker-compose back up again._

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Use Postman to test the api! (https://www.postman.com/)

_For more examples, please refer to the [OpenAPI documentation](http://localhost:4000/docs)_

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Write a cool readme
- [ ] Await group 1 to contact us and build something cool
- [ ] Make a better seeder for wordle
- [ ] Create a banking service for CQRS because it's a better example than authors!

See the [open issues](https://github.com/alexandrelam/ilog/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Alexandre LAM - alexandrelam@outlook.com

Thomas BERNARD - thomas.bernard@etu.imt-nord-europe.fr

Project Link: [https://github.com/alexandrelam/ilog](https://github.com/alexandrelam/ilog)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

- [Typegoose](https://github.com/typegoose/typegoose)
- [Koa with typescript](https://medium.com/@masnun/typescript-with-koa-part-1-c4843f16a4ad)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/alexandrelam/ilog.svg?style=for-the-badge
[contributors-url]: https://github.com/alexandrelam/ilog/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/alexandrelam/ilog.svg?style=for-the-badge
[forks-url]: https://github.com/alexandrelam/ilog/network/members
[stars-shield]: https://img.shields.io/github/stars/alexandrelam/ilog.svg?style=for-the-badge
[stars-url]: https://github.com/alexandrelam/ilog/stargazers
[issues-shield]: https://img.shields.io/github/issues/alexandrelam/ilog.svg?style=for-the-badge
[issues-url]: https://github.com/alexandrelam/ilog/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/alexandrelam/ilog/blob/main/LICENSE
[product-screenshot]: https://user-images.githubusercontent.com/25727549/155735201-e93b111f-ef9f-4453-9515-38f1bf81a46c.png
