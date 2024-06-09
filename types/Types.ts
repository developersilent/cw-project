export interface CardProps {
  id: number;
  img: string;
  title: string;
  price: number;
  description: string;
}


export interface SingleCardProps{
  id: number;
  img: string;
  title: string;
  price: number;
  description: string;
  typeOfData: 'melee' | 'throwable';
}

export interface ReactChildrenProps {
  children: React.ReactNode;
}

export interface StoreValues {
  id: number;
  img: string;
  title: string;
  price: number;
  description: string;
  count?: number;
}
