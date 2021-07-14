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
    userImage: string;
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
    liked: NFTModel[],
    currentBids?: NFTModel[]
}

export interface ArtistModel {
    id: number,
    fullName: string,
    userName: string,
    created: Art[],
    socialLink: string,
    image: string
}

export interface Art {
    id: number,
    image: string
}


export interface NFTDataModel {
    title: string,
    description: string,
    fixedPrice: string,
    paidIn: PaidInType,
    noOfEditions: number,
    type: NFTType,
    image: any
}

export enum PaidInType {
    BNB = 'bnb',
    BITCOIN = 'bitcoin'
}

export enum NFTType {
    Fixed = 'fixed',
    Timed = 'timed',
}