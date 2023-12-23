
const SkeletonCard = () => {
  return (
       <div className="card h-80 w-40 bg-[#3F3F3F] flex flex-col rounded-lg overflow-hidden">
      <div className="min-h-[66.6%] w-full bg-[#7b7b7b] animate-pulse">
      </div>
      <div className="flex flex-col h-full justify-between">
        <div className="p-1">
          <h6 className="h-5 mt-5 bg-[#7b7b7b] animate-pulse">
          </h6>
        </div>
        <div className="w-full flex justify-between px-2 pb-10 h-3">
          <p className="h-3 bg-[#7b7b7b] w-16 animate-pulse"></p>
          <p className="h-3 bg-[#7b7b7b] w-16 animate-pulse"></p>
        </div>
      </div>
    </div>
  )
}

export default SkeletonCard
