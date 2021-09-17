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
                    <th  className={'dif_item'}>Level</th>
                    <th onClick={()=>appDispatch({type:'SET_SORT_VALUE'})} className={'dif_item'}>Value</th>
                    <th className={'dif_item'}>Last 7 days</th>
                    <th className={'dif_item'}># Listed</th>
                    <th className={'dif_item'}/>
                </tr>
                </thead>
                {currentPage.map(({chaosValue,id, baseType, exaltedValue, icon, levelRequired, links, name,lowConfidenceSparkline,listingCount}: IItems) => {
                    return (
                        <tbody key={id} className={'form1_li'}>
                            <tr>
                                <td><div className={'div_list_item'}><div className={'div_img_list'}><img src={icon} alt="icon"/></div>{name}, {links}L, {baseType}</div></td>
                                <td className={'dif_item'}>{levelRequired}</td>
                                <td className={'dif_item'}>{exaltedValue<=1?`${Math.round(chaosValue)} chaos`:`${exaltedValue.toFixed(1)} exalted`}</td>
                                <td className={'dif_item'}>{lowConfidenceSparkline?.totalChange || 0}</td>
                                <td className={'dif_item'}>~{listingCount}</td>
                                <td className={'dif_item'}>info</td>
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