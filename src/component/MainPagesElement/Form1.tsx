import {useAppDispatch, useAppSelector} from "../../hooks/useTypedSelector";
import { useState} from "react";
import {IItems} from "../../interface/IItems";

const Form1 = () => {
    const selector = useAppSelector(store => store.link)
    const selectorItems = useAppSelector(store => store.items)
    const appDispatch = useAppDispatch()
    const title = selector.count2
    // @ts-ignore
    const items:IItems[] = selectorItems.lines
    const [page, SetCurrentPage] = useState(1)
    const [perPage] = useState(30)
    const lastPageIndex = page * perPage
    const currentPage = items.slice(0, lastPageIndex)
    const itsLastPage = lastPageIndex >= items.length

    return (
        <>
            <h2>{title}</h2>
            <table>
                <thead>
                <tr>
                    <th onClick={()=>appDispatch({type:'SET_SORT_NAME'})}><div>Name</div></th>
                    {currentPage[0]?.variant && currentPage[0].levelRequired ? <th  className={'dif_item'}>Passives</th>:null}
                    {currentPage[0]?.mapTier && currentPage[0].baseType ? <th  className={'dif_item'}>Map Tier</th>:null}
                    {currentPage[0]?.levelRequired ? <th  className={'dif_item'}>Level</th>:null}
                    {currentPage[0]?.stackSize && currentPage[0]?.artFilename ? <th  className={'dif_item'}>Stack Size</th>:null}
                    <th onClick={()=>appDispatch({type:'SET_SORT_VALUE'})} className={'dif_item'}>Value</th>
                    <th onClick={()=>appDispatch({type:'SET_SORT_7DAYS'})} className={'dif_item'}>Last 7 days</th>
                    <th onClick={()=>appDispatch({type:'SET_SORT_LISTED'})} className={'dif_item'}># Listed</th>
                    <th className={'dif_item'}/>
                </tr>
                </thead>
                {currentPage.map(({chaosValue,id, variant,baseType, exaltedValue, mapTier,icon,stackSize, levelRequired, links, name,lowConfidenceSparkline,listingCount}: IItems) => {
                    return (
                        <tbody key={id} className={'form1_li'}>
                            <tr>
                                <td><div className={'div_list_item'}><div className={'div_img_list'}><img src={icon} alt="icon"/></div>{name} {links?`, ${links}L, `:null} {baseType}</div></td>
                                {currentPage[0]?.variant && currentPage[0].levelRequired ? <td className={'dif_item'}>{variant.slice(0,2)}</td>:null}
                                {currentPage[0]?.mapTier && currentPage[0].baseType ? <td className={'dif_item'}>{mapTier}</td>:null}
                                {currentPage[0]?.levelRequired ? <td className={'dif_item'}>{levelRequired}</td>:null}
                                {currentPage[0]?.stackSize && currentPage[0]?.artFilename ? <td className={'dif_item'}>{stackSize}</td>:null}
                                <td className={'dif_item'}>{exaltedValue<=1?`${Math.ceil(chaosValue)} chaos`:`${exaltedValue.toFixed(1)} exalted`}</td>
                                <td className={'dif_item'}>{lowConfidenceSparkline?.totalChange || 0}</td>
                                <td className={'dif_item'}>~{listingCount}</td>
                                <td className={'dif_item'}/>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
            {!itsLastPage ? <button onClick={() => SetCurrentPage(page + 1)}>+Pages</button> : null}

        </>
    );
};

export default Form1;