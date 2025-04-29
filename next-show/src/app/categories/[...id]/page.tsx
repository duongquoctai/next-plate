export function generateStaticParams() {
  return [{ id: ["1", "12"] }, { id: ["2"] }, { id: ["4"] }];
}

export const revalidate = 5;

// export const dynamicParams = false;

export default async function CategoryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log(id);

  return (
    <div>
      <h1 className="text-2xl font-bold">Category Detail Page</h1>
      <div className="mt-4">
        <p>Category detail page content goes here.{id}</p>
      </div>
    </div>
  );
}
