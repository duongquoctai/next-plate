export default async function ProductPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  console.log(params);
  return (
    <div>
      <h1 className="text-2xl font-bold">Product Page</h1>
      <p className="mt-4">This is the product page.</p>
    </div>
  );
}
