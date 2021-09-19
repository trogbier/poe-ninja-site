import {useAppSelector} from "../../hooks/useTypedSelector";
import {useState} from "react";
import {IItems} from "../../interface/IItems";
import TheadComponent from "./theadComponent";
import TbodyComponent from "./tbodyComponent";

const FormItems = () => {
    const selector = useAppSelector(store => store.link)
    const selectorItems = useAppSelector(store => store.items)
    const title = selector.count2
    // @ts-ignore
    const items: IItems[] = selectorItems.lines
    const [page, SetCurrentPage] = useState(1)
    const [perPage] = useState(25)
    const lastPageIndex = page * perPage
    const currentPage:any = items.slice(0, lastPageIndex)
    const itsLastPage = lastPageIndex >= items.length

    return (
        <>
            <h2>{title}</h2>
            <table>
                <TheadComponent currentPage={currentPage[0]}/>
                {currentPage.map(({chaosValue, id, variant, baseType, exaltedValue,
                                   mapTier, icon, stackSize, levelRequired, links, name,
                                   lowConfidenceSparkline, listingCount}: IItems) => {
                    const colorChange = () => {
                        // @ts-ignore
                        if (Math.round(lowConfidenceSparkline?.totalChange) === 0) {
                            return 'rgba(236,241,250,0.95)'
                            // @ts-ignore
                        } else if (lowConfidenceSparkline?.totalChange?.toFixed(1) > 0) {
                            return 'rgba(74,131,74,0.82)'
                        } else {
                            return 'rgba(168,55,55,0.87)'
                        }
                    }
                    return (
                        // @ts-ignore
                        <TbodyComponent key={id} chaosValue={chaosValue} id={id+14} variant={variant} baseType={baseType}
                                        exaltedValue={exaltedValue} mapTier={mapTier} icon={icon} stackSize={stackSize}
                                        levelRequired={levelRequired} links={links} name={name}
                                        lowConfidenceSparkline={lowConfidenceSparkline} listingCount={listingCount}
                                        colorChange={() => colorChange()} currentPage={currentPage[0]}/>
                    )
                })}
            </table>
            {!itsLastPage ? <button onClick={() => SetCurrentPage(page + 1)}>+Pages</button> : null}

        </>
    );
};

export default FormItems;