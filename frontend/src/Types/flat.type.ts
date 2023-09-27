export interface Flat {
    title: string;
    locality: string;
    price: string;
    image_url: string;
}
export interface FlatState{
    page: number;
    data: Flat[];
    loading: boolean;
    error: boolean;
    totalPages: number;
  }