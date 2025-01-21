This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) taken  as a tutorial on NextJs.

#### Concept: Create and Share Optimized AI prompts with people.

## Getting Started

First, run the development server:

```bash
npm install 

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## Samples

![Home Page](https://github.com/saikat709/prompt-topia-nextjs/blob/main/images_for_github/promptopia_home.png?raw=true)


![Create Prompt Page](https://github.com/saikat709/prompt-topia-nextjs/blob/main/images_for_github/promptopia_create.png?raw=true)


![Profile Page](https://github.com/saikat709/prompt-topia-nextjs/blob/main/images_for_github/promptopia_profile.png?raw=true)

## Notes
1. server side rendering
    fetch( url, { ceche: 'no-cache' } )
2. Static site Generation
3. Incremental static site
    fetch( url, { next: { revalidate: 10 } })