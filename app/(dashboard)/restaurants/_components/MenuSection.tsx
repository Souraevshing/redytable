import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { menuLogo } from "@/constants/images";
import { StaticImageData } from "next/image";

/**
 * display `menu section` for single restaurant
 */

const MenuPreview = ({ pages }: { pages: (string | StaticImageData)[] }) => (
  <Dialog>
    <DialogTrigger asChild>
      <div className="w-32 h-32 relative cursor-pointer rounded-lg overflow-hidden">
        <Image
          src={menuLogo}
          alt="Menu Preview"
          fill
          className="rounded-lg border object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white font-bold rounded-lg">
          View Menu
        </div>
      </div>
    </DialogTrigger>
    <DialogContent className="max-w-5xl h-[50vh]">
      <div className="flex overflow-x-auto space-x-4 p-4">
        {pages.map((imgSrc, index) => (
          <div key={index} className="relative min-w-[300px] h-[400px]">
            <Image
              src={imgSrc}
              alt={`Menu Page ${index + 1}`}
              fill
              className="rounded-lg border object-contain"
            />
          </div>
        ))}
      </div>
    </DialogContent>
  </Dialog>
);

export default function MenuSection() {
  const menuPages = [menuLogo, menuLogo, menuLogo, menuLogo];

  return (
    <section className="container py-6">
      <h2 className="text-xl font-bold mb-4">Menu</h2>
      <div className="flex gap-4">
        {[1, 2].map((item) => (
          <MenuPreview key={item} pages={menuPages} />
        ))}
      </div>
    </section>
  );
}
