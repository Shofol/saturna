export interface NFTModel {
    id: number;
    name: string;
    creator: string;
    lovedBy: string;
    description: string;
    image: string;
    listPrice: string;
    realPrice: string;
    type: string;
    timeRemaining?: string;
}