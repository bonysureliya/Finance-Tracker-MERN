const Dashboard = () => {
  return <div className="flex space-x-4 h-[100vh] bg-blue-400">
    <div className="w-[400px] border border-red-400  h-full gap-2">
      <div className="h-[60px]">Logo</div>
      <div>1st Part</div>
      <div>2nd Part</div>
    </div>
    <div className="w-full ">Main Content</div>
    <div className="w-[400px] border-4 border-red-400 h-full">Right Bar</div>
  </div>;
};

export default Dashboard;
