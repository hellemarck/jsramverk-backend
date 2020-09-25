-- sql code, sqlite db

CREATE TABLE IF NOT EXISTS users (
    email VARCHAR(255) NOT NULL,
    password VARCHAR(60) NOT NULL,
    UNIQUE(email)
);

CREATE TABLE IF NOT EXISTS reports (
    week INT NOT NULL,
    report VARCHAR(3000) NOT NULL
);

INSERT INTO reports
    (week, report)
VALUES
    (1, '<h2>GitHub</h2>
    <p>The repository on GitHub for this page is <a href="https://github.com/hellemarck/jsramverk">here</a>.</p>

    <h2>App Installation</h2>

    <p>This project was installed with<br />
    <b>npx create-react-app my-app</b></p>


    <h2>Current installations</h2>

    <p>Route installation with <br />
    <b>npm install react-router-dom</b></p>

    <h2>Available Scripts</h2>

    <p><b>npm start</b><br />

    Runs the app in the development mode on <b>http://localhost:3000</b><br />
    The page will reload if you make edits.<br />
    You will also see any lint errors in the console.</p>

    <p><b>npm test</b><br />

    Launches the test runner in the interactive watch mode.<br />
    See the section about <a href="https://facebook.github.io/create-react-app/docs/running-tests">running tests</a> for more information.</p>

    <p><b>npm run build</b><br />

    Builds the app for production to the "build" folder.<br />
    It correctly bundles React in production mode and optimizes the build for the best performance.

    The build is minified and the filenames include the hashes.<br />
    Your app is ready to be deployed!

    See the section about <a href="https://facebook.github.io/create-react-app/docs/deployment">deployment for more information.</a></p>

    <h2>Learn More</h2>

    <p><a href="https://facebook.github.io/create-react-app/docs/getting-started">Create React App documentation</a><br />
    <a href="https://reactjs.org/">React documentation</a></p>

    <p><b>npm run build</b> fails to minify<br/ >
    This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify</p>

    <h2>Documentation</h2>
    <p><b>Kmom01:</b> Im getting to know the framework on a basic level, trying to organize my modules in a comfy way, work with exports and imports and ways to render them in routes. Also trying out functional components, class components and JSX.</p>'
),
    (2, '<p>This project is built with node.js framework Express and database SQLite. Repo jsramverk handles front-end.</p>

        <h2>Installations</h2>

        <p><b>npm init</b><br />
        <p><b>npm install express cors morgan --save</b><br />
        <p><b>npm install -g nodemon</b><br />
        <p><b>npm install sqlite3 --save</b><br />
        <p><b>npm install bcryptjs --save</b><br />
        <p><b>npm install jsonwebtoken --save</b><br />

        <h2>Scripts</h2>

        <p><b>npm start</b> (nodemon app.js)</p>
        <p><b>npm production</b> (start in production mode)</p>
        <p>Runs at <b>http://localhost:1337/</b></p>

        <h2>Documentation</h2>
        <p>Note to self: Commit more often, yes I know.</p>'),
    (3, "Redovisningstext kmom03"),
    (4, "Redovisningstext kmom04"),
    (5, "Redovisningstext kmom05"),
    (6, "Redovisningstext kmom06"),
    (10, "Redovisningstext kmom07-10")
;
