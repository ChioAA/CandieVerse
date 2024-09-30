
import { Link } from "react-router-dom";
import { WalletSelector } from "./WalletSelector";
import { IS_DEV } from "@/constants";
import { buttonVariants } from "@/components/ui/button";

export function Header() {

  return (
    <div>

      <div className="flex gap-2 items-center justify-end pr-10 flex-wrap bg-transparent border-b-4 border-white h-20">
        {IS_DEV && (
          <>
            <Link className={buttonVariants({ variant: "link" })} to={"/create-collection"}>
              Create Collection
            </Link>
          </>
        )}
        <WalletSelector />
      </div>
    </div>
  );
}
