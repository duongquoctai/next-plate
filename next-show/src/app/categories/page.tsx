// export function generateStaticParams() {
//   return [{ id: ["1", "12"] }, { id: ["2"] }, { id: ["4"] }];
// }

export default async function CategoryPage() {
  try {
    const data = await fetch("http://localhost:3000/api/categories");
    const categories = await data.json();
    return (
      <div>
        <h1 className="text-2xl font-bold">List Category Page</h1>
        <div className="mt-4">
          <p>Category page content goes here. - </p>
        </div>
        <ul>
          {categories.map((category: { id: number; name: string }) => (
            <li key={category.id}>
              <a href={`/categories/${category.id}`}>{category.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  } catch {
    return <h2>There was an error.</h2>;
  }
}
