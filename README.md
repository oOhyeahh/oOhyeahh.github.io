# oOhyeahh.github.io

My Github page

## Set Up

Prerequisite dependency

- [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

You can clone this repo using follow command

```sh
git clone https://github.com/oOhyeahh/oOhyeahh.github.io.git
```

## Code Formatting

In order to maintain the code and commit in consistent format, we use [husky](https://github.com/typicode/husky) to run linting and code formating hooks. To set up husky in local development, using the following command

```sh
npm install
npm run prepare
git add .husky/pre-commit
```

You can add hook to husky using the following command

```sh
npx husky add .husky/pre-commit "<your npm command>"
git add .husky/pre-commit
```

The hook would run everytime when you make a commit. Or you can force to ignore it by adding `no-verify` add the end of commit command.

