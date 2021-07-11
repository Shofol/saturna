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

export interface UserModel {
    id: number;
    fullName: string;
    image: string;
    userName: string;
    bio: string;
    followers: number;
    following: number;
    likes: number;
    worth: number;
    created: NFTModel[],
    collection: NFTModel[],
    liked: NFTModel[]
}