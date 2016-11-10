# Getting Started

## Quick get started

> Beforehand you need to create a aws accouunt and configure the credentials.
> aws configure: http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html#cli-using-examples

> Install node, npm and open a terminal

Install atomable via npm.
```
npm install atomable -Getting
```

Create a directory.
```
mkdir <project-name>
```

Generate a sample microservice.
```
atomable generate <microservice-name>
```

Deploy the microservice on aws.
```
atomable deploy
```

Copy paste the endpoint url from the console and copy it in a browser and add a firstName query parameter at the endpoint.
```
<url>?firstName?<your-first-name>
```

You should get a ``` hello <your-first-name>.