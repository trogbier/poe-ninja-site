import React from 'react';
import {useAppSelector} from "../../hooks/useTypedSelector";

// @ts-ignore
const TbodyComponent = ({currentPage,colorChange,chaosValue, id, variant, baseType, exaltedValue, mapTier, icon, stackSize, levelRequired, links, name, lowConfidenceSparkline, listingCount}) => {
    const selector = useAppSelector(store => store.link)
    const title = selector.count2
    return (
        <tbody key={id} className={'form1_li'}>
        <tr>

            <td>
                <div className={'div_list_item'}>
                    <div className={'div_img_list'}><img src={icon} alt="icon"/></div>
                    {name} {links ? `, ${links}L, ` : null} {baseType === name ? null : baseType}
                    <div className={'div_a'}><a rel='noreferrer' target="_blank" href={`https://www.poewiki.net/wiki/${name}`}>WIKI</a></div>
                </div>
            </td>
            {currentPage?.variant && currentPage.levelRequired && title !== 'Unique Armours' ?
                <td className={'dif_item'}>{variant?.slice(0, 2)}</td> : null}
            {currentPage?.mapTier && currentPage.baseType ?
                <td className={'dif_item'}>{mapTier}</td> : null}
            {currentPage?.levelRequired ? <td className={'dif_item'}>{levelRequired}</td> : null}
            {currentPage?.stackSize && currentPage?.artFilename ?
                <td className={'dif_item'}>{stackSize||1}</td> : null}
            <td className={'dif_item'}>{exaltedValue <= 1 ? `${Math.ceil(chaosValue)} chaos` : `${exaltedValue?.toFixed(1)} exalted`}</td>
            <td className={'dif_item '}><div className={'chart_div'}><div>
                <svg><g transform="translate(0, 2)">
                    <path className="Sparkline_area"
                          d="M0,9.623736263736262C3.222222222222222,9.31252747252747,6.444444444444445,9.001318681318681,9.666666666666666,9.001318681318681C12.888888888888888,9.001318681318681,16.11111111111111,9.001318681318681,19.333333333333332,9.001318681318681C22.555555555555554,9.001318681318681,25.77777777777778,9.001318681318681,29,9.001318681318681C32.22222222222222,9.001318681318681,35.44444444444444,9.001318681318681,38.666666666666664,9.001318681318681C41.888888888888886,9.001318681318681,45.111111111111114,18,48.333333333333336,18C51.55555555555556,18,54.77777777777778,9,58,0L58,22C54.77777777777778,22,51.55555555555556,22,48.333333333333336,22C45.111111111111114,22,41.888888888888886,22,38.666666666666664,22C35.44444444444444,22,32.22222222222222,22,29,22C25.77777777777778,22,22.555555555555554,22,19.333333333333332,22C16.11111111111111,22,12.888888888888888,22,9.666666666666666,22C6.444444444444445,22,3.222222222222222,22,0,22Z"/>
                    <path className="Sparkline_line"
                          d="M0,9.623736263736262C3.222222222222222,9.31252747252747,6.444444444444445,9.001318681318681,9.666666666666666,9.001318681318681C12.888888888888888,9.001318681318681,16.11111111111111,9.001318681318681,19.333333333333332,9.001318681318681C22.555555555555554,9.001318681318681,25.77777777777778,9.001318681318681,29,9.001318681318681C32.22222222222222,9.001318681318681,35.44444444444444,9.001318681318681,38.666666666666664,9.001318681318681C41.888888888888886,9.001318681318681,45.111111111111114,18,48.333333333333336,18C51.55555555555556,18,54.77777777777778,9,58,0"/>
                </g></svg>
            </div><span style={{color:colorChange()}}>{`${Math.round(lowConfidenceSparkline?.totalChange as number)}%` || 0}</span></div></td>
            <td className={'dif_item'}>~{listingCount}</td>
            <td className={'dif_item'}/>
        </tr>
        </tbody>
    );
};

export default TbodyComponent;