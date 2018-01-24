# just_eat_test

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Questions
### 1)  How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.
I spent about 5 hours total to get it to this point. Had I more time to give, I would definitely like to add some transitions/animations to the restaurant list as it loads in; perhaps some kind of pagination/infinite scrolling feature as well so the user isn't given a giant scrollbar. Maybe even layout some more data on each "card" as the API does return a lot of information. I would also like to see if it is possible to do some kind of validation on the postal code, or even change the locale all together. I feel what I have is barebones and the tests i added reflect that. If there were more features, I would also have more tests!

### 2) What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
I don't know if this is considered a feautre but the templating system that the Vue Js team released is extremely helpful in getting projects (big or small) up and running in a flash. For someone who easily gets lost in webpack config files this is a huge time saver.

### 3) How would you track down a performance issue in production? Have you ever had to do this?
Performance issues in the front end tend to be caught mostly through user testing. New features, pages, modules, that introduce new assets or functionality are always easy go-tos when checking if they impact site performance negatively. Checking them on a variety of devices, with variables like connection type and speed, narrowing things down using the network tab to see if assets are causing an issue. If repeative or redudant API calls are being made. This is usually the process I go through when met with a performance issue on a production site.

### 4) How would you improve the Just Eat APIs that you just used?
It didn't seem very evident what I needed to do to get an API key and start using it if I wasn't given this information already. I felt it was easy enough to use with the headers but there's also no documentation on how to use it for different countries for instance.

### 5) Please describe yourself using JSON.
```
{
    name: "Amir Ashtiani",
    occupation: "Front End Developer",
    location: "Toronto",
    hobbies: ['art', 'games', 'tennis', 'baking']
}
```