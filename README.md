This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


{/* ✅ Render SVG only after coordinates are known */}
      {currPositionX !== null && currPositionY !== null && (
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={`M${currPositionX} ${currPositionY} L${currPositionX} 750`}
            stroke="white"
            strokeWidth={1}
            fill="none"
          />
        </svg>
      )}



      useEffect(() => {
    const updatePosition = () => {
      if (htmlRef.current) {
        const rect = htmlRef.current.getBoundingClientRect();
        setCurrPositionX(rect.left + rect.width / 2);
        setCurrPositionY(rect.top + window.scrollY + rect.height / 2);
      }
    };

    updatePosition();

    window.addEventListener("scroll", updatePosition);
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, []);


  d={`
                M ${currPositionX},${currPositionY}
                C ${currPositionX},${(currPositionY + screenBottomY) / 2}
                  ${screenCenterX},${(currPositionY + screenBottomY) / 2}
                  ${screenCenterX},${screenBottomY}
              `}