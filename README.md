# Accessing Environment Variables on Client in Next.js

One common issue that developers encounter when using Next.js is the difficulty in accessing environment variables on the client-side when there is only one image for development, staging, and production.

This repo is to showcase a solution you need to access environment variables on the client-side in Next.js, even when there is only a single image for multiple environments.

## Environment Variables for each page

For each page, that is supposed to access environment variables we need to add `getServerSideProps` function.

It could be existing `getServerSideProps` function. It needs to use our custom `getPublicConfigs` as follows:

```js
const getServerSideProps = async (context) => {
  const publicConfigs = getPublicConfigs(context);
  // Existing logic here
  return {
    props: {
      publicConfigs,
      // Other props here
    },
  };
};
```

Otherwise if the page isnt using `getServerSideProps` function, you could import it from the common utility function as follows:

```js
export { default as getServerSideProps } from "../utility/getServerSideProps";
```

## References

- [Salty Crane](https://www.saltycrane.com/blog/2021/04/buildtime-vs-runtime-environment-variables-nextjs-docker/)
