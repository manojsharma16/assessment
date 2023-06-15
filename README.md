# assessment
assessment task for client

Demo link : https://moviehub234.netlify.app/

Get started
Clone the repo

git clone https://github.com/manojsharma16/assessment.git
cd assessment

Install npm packages

Install the npm packages described in the package.json and verify that it works:

npm install
ng serve / npm start

The npm start command builds (compiles TypeScript and copies assets) the application into dist/, watches for changes to the source files, and runs lite-server on port 4200.

Shut it down manually with Ctrl-c.
npm scripts

These are the most useful commands defined in package.json:

    npm start - runs the TypeScript compiler, asset copier, and a server at the same time, all three in "watch mode".
    npm run build - runs the TypeScript compiler and asset copier once.
    npm run build:watch - runs the TypeScript compiler and asset copier in "watch mode"; when changes occur to source files, they will be recompiled or copied into dist/.
    npm run lint - runs tslint on the project files.
    npm run serve - runs lite-server.

These are the test-related scripts:

    npm test - builds the application and runs Intern tests (both unit and functional) one time.
    npm run ci - cleans, lints, and builds the application and runs Intern tests (both unit and functional) one time.


Important note:

     The requirement given to build the application is done, but there are certain api limitation because of which 1 point couldn't be completed like the api fetch only 10 records at a time and there is no api available to fetch all records in a single api call so i have implement pagination based on fixed number of 10 records per page.

Project Detail:

    This is a small web app which shows the movie listing. we can search and filter this movie listing based on year and title.
    we can also view the detail of the movie.

Modules : 

    1.common-component module : It has all the component like navbar and loader,
    2.movie module : It has 2 major components movie-listing and movie-detail, also one more component which is page not found component.


Movie listing : This components shows all the movie listing fetch from "omdb" api. we can search and filter this movie  listing based on year and title.

Movie detail : Here we can view the detail of selected movie with all its parameter like imdb rating, year, title, actor etc.



