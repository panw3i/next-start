// app/blog/[slug]/page.tsx
export default function Page({ params }: { params: { slug: string[] } }) {
    return <div>My Post: {params.slug.join(",")}</div>
}

// http://localhost:3000/shop/a/b/c
