# Intro
[Storybook][1] is a great tool for streamlining UI development, testing and
documentation. In the case of NewShaft, we'll use it in the development phase
and also for documentation of front-end React components.

In the development phase, it will allow you to render your React components as
[stories][2] in development without having to start up the whole tech stack that
NewShaft uses. An added benefit of adopting this workflow is your component
becomes more isolated and less dependent on its environment.

For documentation, the stories written in the development phase could be
directly used. Storybook also has features such as setting prop values in its web UI
and get immediate visual feedback, see the source code of a component, etc. In
general, this makes it ideal for spectech engineers to quickly use the
components that their colleagues have written.

# Usage
In the parent directory (i.e `/src/client/src`), run

```shell
$ npm install  # if you haven't already
$ npm run storybook
```

If everything goes well, you should see your browser pop up displaying the
storybook web UI.


# Resources
You can learn more about storybook on its [official website][1], which is well
documented and contains several user-friendly and step-by-step [tutorials][3].


[1]: https://storybook.js.org/
[2]: https://storybook.js.org/docs/react/get-started/whats-a-story
[3]: https://storybook.js.org/tutorials/
