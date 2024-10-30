// import { tokenAsssets } from "@/__mockdata__/tokenAssets";
// import AssetTableDisplay from "../ui/table/assetTableDisplay";

// export default function AssetTable(){
//    return(
//     <div>
//      <AssetTableDisplay
//           data={tokenAsssets}
//           styles="col-span-1"
//           colmumHeads={['Coin', 'Code', 'Price', 'Total Supply']}
//            />
//     </div>
//    )
// }


import AssetTableDisplay from "../ui/table/assetTableDisplay";

export default function AssetTable(){
   return(
    <div>
     <AssetTableDisplay
     
          styles="col-span-1"
          colmumHeads={['Coin', 'Code', 'Price', 'Total Supply']}
           />
    </div>
   )
}