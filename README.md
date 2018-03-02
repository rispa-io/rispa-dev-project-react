# rispa-dev-project-react

[![Greenkeeper badge](https://badges.greenkeeper.io/rispa-io/rispa-dev-project-react.svg)](https://greenkeeper.io/)
Temporally project. Will be deprecated after preset implementation was done

## Getting Started
To start work you should install `@rispa/cli` globally. It provides command to run and maintain app:

```bash
yarn global add @rispa/cli
```

or

```bash
npm install -g @rispa/cli
```

To bootstrap project, run:
```
yarn bs
```

## Plugin scripts
Each plugin has its own commands which you can run in project root using following syntax:

```bash
ris [pluginName] [commandName]
```
pluginName - a plugin name (name property in the package.json) or it’s alias (rispa:name property in the package.json) commandName - one of the scripts of package.json of the plugin

pluginName and commandName are optional. If you omit them command will allow to pick plugin or command from the list


