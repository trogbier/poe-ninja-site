
export interface IItems{
    "id": number,
    "name": string,
    "icon": string,
    "levelRequired"?:number,
    "baseType"?: string,
    "links"?: number,
    "stackSize"?:number,
    "itemClass"?: number,
    "mapTier"?:number,
    artFilename?:string,
    "variant"?:any,
    "sparkline"?: {
        "data": any[],
        "totalChange": number
    },
    "lowConfidenceSparkline"?: {
        "data"?: number[] ,
        "totalChange"?: number
    },
    "implicitModifiers"?: any[],
    "flavourText"?: string,
    "itemType"?: string,
    "chaosValue": number,
    "exaltedValue": number,
    "count"?: number,
    "detailsId"?: string,
    "listingCount"?: number
}