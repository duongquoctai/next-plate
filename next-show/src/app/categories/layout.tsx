const CategoryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Category Layout</h1>
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default CategoryLayout;
