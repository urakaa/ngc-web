export default function Step({}) {
  return (
    <>
      <section className="step" id="step">
        <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 sm:grid-cols-2">
          <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
            <div className="w-px h-full bg-gray-300 lg:w-full lg:h-px" />
          </div>
          <div className="step-card">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[20px] font-bold text-[#f58521]">
                Алсын Хараа{" "}
              </p>
              <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
                1
              </p>
            </div>
            <p className="text-[16px] text-gray-900">
              Өндөр өгөөж бүхий хөрөнгө оруулалт сангууд бий болгох
            </p>
          </div>
          <div className="step-card">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[20px] font-bold text-[#f58521]">
                Эрхэм зорилго{" "}
              </p>
              <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
                2
              </p>
            </div>
            <p className="text-[16px] text-gray-900">
              Хөрөнгө оруулагч бүрд урт хугацаанд тогтвортой өгөөж хүртээх
            </p>
          </div>
          <div className="step-card">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[20px] font-bold  text-[#f58521]">
                Үнэт зүйл{" "}
              </p>
              <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
                3
              </p>
            </div>
            <p className="text-[16px] text-gray-900">
              Хөрөнгө оруулагчийн итгэл
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
