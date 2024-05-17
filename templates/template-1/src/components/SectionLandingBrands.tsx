import type { ILandingBrandsData } from '../interfaces/ILandingBrandsData';

interface IProp {
  brands: ILandingBrandsData[];
}

const LandingBrands = ({ brands }: IProp) => {
  return (
    <div className="bg-degrad-global -mt-4 py-6 w-full flex items-center justify-center gap-12">
      {brands.map((i, x) => (
        <img className="w-40 grayscale brightness-0 invert" key={x} src={i.path}></img>
      ))}
    </div>
  );
};

export default LandingBrands;
