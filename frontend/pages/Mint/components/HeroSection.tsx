import { FC, FormEvent, useState } from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useQueryClient } from "@tanstack/react-query";
// Internal assets
import Screen from "@/assets/placeholders/Screen.png"
// Internal utils
import { formatDate } from "@/utils/formatDate";
import { aptosClient } from "@/utils/aptosClient";
// Internal hooks
import { useGetCollectionData } from "@/hooks/useGetCollectionData";
// Internal components
import { Image } from "@/components/ui/image";

// Internal enrty functions
import { mintNFT } from "@/entry-functions/mint_nft";
import loveley from "@/assets/movies/lovely.mp4"

interface HeroSectionProps {}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const { data } = useGetCollectionData();
  const queryClient = useQueryClient();
  const { account, signAndSubmitTransaction } = useWallet();
  const [nftCount, setNftCount] = useState(1);

  const { collection, totalMinted = 0, maxSupply = 1 } = data ?? {};

  const mintNft = async (e: FormEvent) => {
    e.preventDefault();
    if (!account || !data?.isMintActive) return;
    if (!collection?.collection_id) return;

    const response = await signAndSubmitTransaction(
      mintNFT({ collectionId: collection.collection_id, amount: nftCount }),
    );
    await aptosClient().waitForTransaction({ transactionHash: response.hash });
    queryClient.invalidateQueries();
    setNftCount(1);
  };

  return (
    <section className="hero-container flex flex-col md:flex-col gap-6 px-4 max-w-screen-xl mx-auto w-4/5">
      <div className="bg-gray-50 flex justify-center p-4 rounded-s h-[75vh]">
      <div className="bg-gray-200 p-4 flex justify-center rounded-3xl w-full">
      <div className="bg-gray-900 rounded-3xl flex w-full justify-center">
      <video
        src={collection?.cdn_asset_uris.cdn_image_uri ?? collection?.cdn_asset_uris.cdn_animation_uri ?? loveley}
        autoPlay
        loop
        preload="metadata"
        className="md:basis-2/5 object-cover h-full w-full self-center"
      />
      </div>
      </div>
      </div>
    </section>
  );
};