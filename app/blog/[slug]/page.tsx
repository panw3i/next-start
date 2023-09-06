// app/blog/[slug]/page.tsx
export default function Page({ params }: { params: { slug: string } }) {
    return <div>My Post: {params.slug}</div>
}

// http://localhost:3000/blog/2
