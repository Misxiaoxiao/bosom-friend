export interface TPHParamsType {
  cat: string;
  limit: number;
}

export interface TAParamsType {
  offset: number;
  limit: number;
}

export interface TSParamsType {
  type: number;
}

export interface LoginPType {
  phone: number;
  password: string;
  countrycode?: number;
}
