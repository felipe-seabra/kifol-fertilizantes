export interface IFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
  checkbox: boolean;
}

export interface IVideo {
  id: number;
  title: string;
  url: string;
  description?: string;
}

export interface IProduct {
  id: number;
  image: string;
  name: string;
  description: string[];
}
