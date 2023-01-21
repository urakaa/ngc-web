/* eslint-disable @next/next/no-img-element */
export default function Pdf() {
  return (
    <>
      <section className="pdf" id="pdf">
        <h2 className="text-[40px] mb-[70px]">Засаглалын баримт бичиг</h2>
        <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 sm:grid-cols-2">
          <a
            href="/pdf/шүгэл-үлээх-бодлого.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="max-w-sm overflow-hidden rounded shadow-lg cursor-pointer card ">
              <img className="w-full" src="/images/pdf.png" alt="Pdf" />
              <div className="px-6 py-4">
                <div className="mb-2 text-[16px] font-bold text-center">
                  Шүгэл үлээх бодлого
                </div>
              </div>
            </div>
          </a>
          <a
            href="/pdf/ТУЗ-ийн-үйл-ажиллагааны-журам.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="max-w-sm overflow-hidden rounded shadow-lg cursor-pointer card">
              <img className="w-full" src="/images/pdf.png" alt="Pdf" />
              <div className="px-6 py-4">
                <div className="mb-2 text-[16px] font-bold text-center">
                  ТУЗ-ийн үйл ажиллагааны журам
                </div>
              </div>
            </div>
          </a>
          <a href="/pdf/Ёс-зүйн-дүрэм.pdf" target="_blank" rel="noreferrer">
            <div className="max-w-sm overflow-hidden rounded shadow-lg cursor-pointer card">
              <img className="w-full" src="/images/pdf.png" alt="Pdf" />
              <div className="px-6 py-4">
                <div className="mb-2 text-[16px] font-bold text-center">
                  Ёс зүйн дүрэм
                </div>
              </div>
            </div>
          </a>
          <a
            href="/pdf/Залгамж-халааны-бодлого.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="max-w-sm overflow-hidden rounded shadow-lg cursor-pointer card">
              <img className="w-full" src="/images/pdf.png" alt="Pdf" />
              <div className="px-6 py-4">
                <div className="mb-2 text-[16px] font-bold text-center">
                  Залгамж халааны бодлого
                </div>
              </div>
            </div>
          </a>
          <a
            href="/pdf/аудитын-хорооны-ажиллах-журам.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="max-w-sm overflow-hidden rounded shadow-lg cursor-pointer card">
              <img className="w-full" src="/images/pdf.png" alt="Pdf" />
              <div className="px-6 py-4">
                <div className="mb-2 text-[16px] font-bold text-center">
                  Aудитын хорооны ажиллах журам
                </div>
              </div>
            </div>
          </a>
          <a
            href="/pdf/Ногдол-ашгийн-бодлого.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="max-w-sm overflow-hidden rounded shadow-lg cursor-pointer card">
              <img className="w-full" src="/images/pdf.png" alt="Pdf" />
              <div className="px-6 py-4">
                <div className="mb-2 text-[16px] font-bold text-center">
                  Ногдол ашгийн бодлого
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
