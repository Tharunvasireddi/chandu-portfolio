import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { HeroPageImages } from "@/data/works.js";
import { IKImage } from "imagekitio-react";
import { imageKit } from "@/lib/utils.js";

const PortfolioPage = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
    dragFree: true,
    breakpoints: {
      "(min-width: 768px)": { slidesPerView: 2 },
      "(min-width: 1024px)": { slidesPerView: 3 },
    },
  });

  const handleNext = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  };

  const handlePrevious = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  };

  // Background image style - use inline style instead of Tailwind for dynamic values
  const heroBackgroundStyle = {
    backgroundImage: `url(${imageKit.endpoint}/cp/Portfolio_Image.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div>
      <div style={heroBackgroundStyle} className="h-[500px] relative">
        {/* Text container with short description and title and long description */}
        <div className="absolute top-0 border-none rounded-3xl rounded-l-none p-2 left-0 bg-black text-white flex flex-col justify-center items-start gap-4">
          <p className="text-sm uppercase text-gray-600 font-semibold">Portfolio</p>
          <h1 className="text-2xl uppercase">Visual Poetry in Pixels</h1>
          <p className="text-wrap text-sm text-gray-500 tracking-tight">
            Step into a visual journey that encapsulates the essence of my lens.
            <br />
            Each photograph in this portfolio is a narrative, a frozen moment in
            time, and a testament to the artistry and passion poured into every
            frame. 
            <br />
            Explore the diverse tapestry of stories I've had the
            privilege to capture and witness the world through my lens.
          </p>
        </div>
      </div>
      <div className="bg-[#111111] dark:bg-[#f5f5f5] p-4 sm:p-6 md:p-8">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          {/* Header Container */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-[#e0e0e0] dark:text-[#1a1a1a] text-xl uppercase sm:text-2xl font-bold tracking-tight border-b border-[#1C1C21] dark:border-gray-200">
              Photos
            </h1>

            {/* Navigation Container */}
            <div className="flex justify-center items-center p-[2px] gap-2 w-[110px] h-[55px] bg-[#070708] dark:bg-white border border-[#1C1C21] dark:border-gray-200 rounded-full">
              <Button
                onClick={handlePrevious}
                variant="outline"
                className="flex items-center p-[12px] w-[40px] h-[40px] bg-[#1C1C21] dark:bg-gray-100 rounded-full border-none hover:bg-[#2a2a2a] dark:hover:bg-gray-200 transition-all"
              >
                <ChevronLeft className="w-[30px] h-[30px] text-white dark:text-black stroke-2" />
              </Button>
              <Button
                onClick={handleNext}
                variant="outline"
                className="flex items-center p-[12px] w-[40px] h-[40px] bg-[#1C1C21] dark:bg-gray-100 rounded-full border-none hover:bg-[#2a2a2a] dark:hover:bg-gray-200 transition-all"
              >
                <ChevronRight className="w-[30px] h-[30px] text-white dark:text-black stroke-2" />
              </Button>
            </div>
          </div>

          {/* Main Carousel */}
          <div
            className="overflow-hidden p-0 dark:bg-white border-b border-[#1C1C21] dark:border-gray-200"
            ref={emblaRef}
          >
            <div className="flex -ml-3 sm:-ml-4">
              {HeroPageImages.map((image) => (
                <div
                  key={image.id}
                  className="flex-[0_0_calc(100%-12px)] sm:flex-[0_0_calc(50%-16px)] lg:flex-[0_0_calc(33.33%-16px)] min-w-0 pl-3 sm:pl-4"
                >
                  <div className="relative aspect-[3/4] group">
                    <IKImage
                      src={image.src}
                      // alt={image.alt}
                      loading="lazy"
                      className="w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover rounded-xl transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 dark:bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
