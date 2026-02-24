# Contributing

![dphelper](https://raw.githubusercontent.com/passariello/container/refs/heads/main/dphelper/assets/logos/logo.svg)

First off, thanks for taking the time to contribute! ❤️

All types of contributions are encouraged and valued. See the [Table of Contents](#table-of-contents) for different ways to help and details about how this project handles them.

## Table of Contents

* [Code of Conduct](#code-of-conduct)
* [I Have a Question](#i-have-a-question)
* [I Want To Contribute](#i-want-to-contribute)
  * [Reporting Bugs](#reporting-bugs)
  * [Suggesting Enhancements](#suggesting-enhancements)
  * [Your First Code Contribution](#your-first-code-contribution)
  * [Modular Architecture & New Tools](#modular-architecture--new-tools)
* [Styleguides](#styleguides)
  * [Commit Messages](#commit-messages)
* [Join The Project Team](#join-the-project-team)

---

## Code of Conduct

This project and everyone participating in it is governed by the [dphelper Code of Conduct](https://github.com/passariello/dpHelper-private/blob/main/.github/CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## I Have a Question

Before you ask a question, it is best to search for existing [Issues](https://github.com/passariello/dpHelper-private/issues).

If you then still feel the need to ask a question, we recommend the following:

* Open an Issue.
* Provide as much context as you can.

## I Want To Contribute

### Legal Notice

When contributing to this project, you must agree that you have authored 100% of the content and that it may be provided under the project licence.

### Reporting Bugs

Search the [bug tracker](https://github.com/passariello/dpHelper-private/issues?q=label%3Abug) before submitting.
Provide reproduction steps, stack traces, and environment details.

### Suggesting Enhancements

Enhancement suggestions are tracked as [GitHub issues](https://github.com/passariello/dpHelper-private/issues).

* Use a clear and descriptive title.
* Describe the current behavior and the expected behavior.

### Your First Code Contribution

1. Fork the repository.
2. Create a new branch.
3. Implement your changes.
4. Submit a Pull Request.

### Modular Architecture & New Tools

`dphelper` follows a strict modular architecture. To add a new tool:

1. Create a folder in `tools/[tool-name]`.
2. Implement logic in `index.ts`.
3. Export interface in `index.d.ts`.
4. Run `npm run generate-imports` to sync everything.
5. Build and verify with `npm run build`.

## Styleguides

### Commit Messages

Please use clear and descriptive commit messages. We recommend following [Conventional Commits](https://www.conventionalcommits.org/).

## Join The Project Team

Please send an email to <dariopassariello@gmail.com>

---
Copyright (c) 2019 - 2026 Dario Passariello.
