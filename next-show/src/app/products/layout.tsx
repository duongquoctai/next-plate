const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Product Layout</h1>
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default ProductLayout;
