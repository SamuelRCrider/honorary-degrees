import { useDegreeStore } from "../store/useDegreeStore";

export default function DiplomaPreview() {
  const { name, title, description, university, trustee } = useDegreeStore();

  // Always use current date for display
  const currentDate = new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="p-2">
      <div className="mx-auto bg-cream border-8 border-double border-gold p-4 sm:p-8 font-serif text-center bg-[#fffbf0] max-w-full overflow-hidden">
        <div className="border-4 border-double border-[#d4af37] p-2 sm:p-6">
          <div className="flex justify-center mb-4">
            <img
              src="../assets/images/cocktail.png"
              alt="Cocktail"
              className="h-12 w-12 sm:h-16 sm:w-16"
            />
          </div>

          <div className="uppercase text-xs tracking-widest mb-4 text-[#8a7825]">
            {university}
          </div>

          <div className="text-2xl sm:text-3xl font-bold mb-2 text-[#8a7825]">
            HONORARY DEGREE
          </div>

          <div className="text-lg sm:text-xl mb-6 italic text-[#8a7825]">
            {title || "Doctor of Humane Letters"}
          </div>

          <div className="mb-2 text-[#594e18]">This certifies that</div>

          <div className="text-xl sm:text-2xl font-bold mb-4 text-[#3a3112]">
            {name || "Your Name"}
          </div>

          <div className="mb-6 text-xs sm:text-sm leading-relaxed px-2 sm:px-8 text-[#594e18]">
            {description ||
              "Having demonstrated exceptional achievement and contribution to society, is hereby awarded this honorary degree with all rights, privileges and honors thereunto appertaining."}
          </div>

          <div className="mb-6 text-xs sm:text-sm text-[#594e18]">
            Conferred on {currentDate}
          </div>

          <div className="flex justify-around mt-8">
            <div className="text-center">
              <div className="text-xs sm:text-sm font-bold pb-2 text-[#8a7825]">
                Matthew Zegil
              </div>
              <div className="border-t border-[#d4af37] w-24 sm:w-40"></div>
              <div className="text-xs sm:text-sm font-bold text-[#8a7825]">
                University President
              </div>
            </div>
            <div className="text-center">
              <div
                className={`text-xs sm:text-sm font-bold pb-2 text-[#8a7825] ${
                  !trustee ? "opacity-0" : ""
                }`}
              >
                {trustee || "Matthew Zegil"}
              </div>
              <div className="border-t border-[#d4af37] w-24 sm:w-40"></div>
              <div className="text-xs sm:text-sm font-bold text-[#8a7825]">
                Board of Trustees
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
