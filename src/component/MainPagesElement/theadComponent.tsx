import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/useTypedSelector";

// @ts-ignore
const TheadComponent = ({currentPage}) => {
    const selector = useAppSelector(store => store.link)
    const appDispatch = useAppDispatch()
    const title = selector.count2
    return (
        <thead >
        <tr>
            <th onClick={() => appDispatch({type: 'SET_SORT_NAME'})}>
                <div>Name</div>
            </th>
            {currentPage?.variant && currentPage.levelRequired && title !== 'Unique Armours' ?
                <th onClick={() => appDispatch({type: 'SET_SORT_VARIANT'})}
                    className={'dif_item'}>Passives</th> : null}
            {currentPage?.mapTier && currentPage.baseType ?
                <th onClick={() => appDispatch({type: 'SET_SORT_MAP_TIER'})} className={'dif_item'}>Map
                    Tier</th> : null}
            {currentPage?.levelRequired ? <th onClick={() => appDispatch({type: 'SET_SORT_VALUE'})}
                                                 className={'dif_item'}>Level</th> : null}
            {currentPage?.stackSize && currentPage?.artFilename ?
                <th onClick={() => appDispatch({type: 'SET_SORT_STACK_SIZE'})} className={'dif_item'}>Stack
                    Size</th> : null}
            <th onClick={() => appDispatch({type: 'SET_SORT_VALUE'})} className={'dif_item'}>Value</th>
            <th onClick={() => appDispatch({type: 'SET_SORT_7DAYS'})} className={'dif_item'}>Last 7 days</th>
            <th onClick={() => appDispatch({type: 'SET_SORT_LISTED'})} className={'dif_item'}># Listed</th>
            <th className={'dif_item'}/>
        </tr>
        </thead>
    );
};
// @ts-ignore
export default TheadComponent;