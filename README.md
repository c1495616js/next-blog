# Frontend Booster - NextJS

This codebase is a NextJS boilerplate. It is intended to be used as a
[Booster](https://github.com/jared-jewitt/booster-guidelines) for my [Launchpad](https://github.com/jared-jewitt/launchpad).
However, that being said, it can still be used completely on its own - CI/CD and infrastructure (IaC) come pre-configured.

#### Requirements:

- [Docker](https://www.docker.com/) (Optional)
- [Node](https://nodejs.org/en/) (Required - unless Docker is used)
- [WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10) (Optional - only for Windows users)

#### Features:

- 👏🏼 Next 10
- ⚛️ React 17
- ⛑️ Type safety via TypeScript
- 🔐 Private, public, and shared routes
- 💄 Write SCSS & future CSS with PostCSS + preset-env
- 🎯 Browserslist for specific browser support
- 🖊 Add SVGs, images, and custom fonts
- 🌎 Path aliasing for streamlined imports
- 🌈 Prettier for consistent code style
- 👀 Lint your code with ESLint & StyleLint
- 🐺 Husky + lint-staged for code quality assurance
- 🧪 Jest + React Testing Library for tests

#### Developers:

- [Jared Jewitt](https://jared-jewitt.github.io/)

## 🏃 Getting Started

Run the frontend via either option below, then visit the client at `http://localhost:3000`

**_Docker:_**

```
make run
```

**_NPM:_**

```
npm install
npm run dev
```

## ⌨️ Commands

**_Docker:_**

| Command        | Description                                                         |
| -------------- | ------------------------------------------------------------------- |
| make run       | Launches the client                                                 |
| make close     | Closes the client                                                   |
| make purge     | Purges the client containers, images, networks, volumes             |
| make workspace | Shells into the client to run one-off commands. e.g. `npm run test` |

**_NPM:_**

| Command      | Description                                                   |
| ------------ | ------------------------------------------------------------- |
| npm run prod | Builds and runs the client on $PORT &#124;&#124; 4000         |
| npm run dev  | Runs the client with hot reloading on $PORT &#124;&#124; 3000 |
| npm run test | Runs the suite of Jest tests                                  |
| npm run lint | Runs Prettier, ESLint, and StyleLint formatters               |

## 🚀 Deployment

[Instructions here](DEPLOYMENT.md).

## ⚖️ License

Code released under the [MIT License](LICENSE).
