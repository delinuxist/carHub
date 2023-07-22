import { StaticImageData } from "next/image";
import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  buttonType?: "button" | "submit" | "reset";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  textStyles?: string;
  rightIcon?: StaticImageData;
  isDisabled?: boolean;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: Dispatch<SetStateAction<string>>;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

export interface FilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}
