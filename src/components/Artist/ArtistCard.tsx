import { useCoverBg } from '../../hooks/useCoverBg'
import { ArtistModel } from '../../types/types';

const ArtistCard = ({ artist }: ArtistCardPropModle) => {

    const bg1 = useCoverBg(artist.created[0].image);
    const bg2 = useCoverBg(artist.created[1].image);
    const userBg = useCoverBg(artist.image);


    return (
        <div className="bg-white shadow-nftShadow max-w-sm rounded-3xl p-5 flex flex-col justify-center items-start">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center py-3">
                    <div className="w-12 h-12 rounded-full mr-4" style={userBg}></div>
                    <div className="text-left">
                        <p className="font-bold text-lg">{artist.fullName}</p>
                        <p className="text-gray-500">@{artist.userName}</p>
                    </div>
                </div>
                <a href={artist.socialLink} target="_blank" rel="noreferrer" className="border border-gray-200 px-5 py-2 rounded-3xl font-bold">Follow</a>
            </div>
            <div className="flex justify-between w-full mt-2">
                <div className="rounded-2xl w-40 h-32 mr-4" style={bg1}></div>
                <div className="rounded-2xl w-40 h-32" style={bg2}></div>

            </div>
        </div>
    )
}

interface ArtistCardPropModle {
    artist: ArtistModel
}

export default ArtistCard
