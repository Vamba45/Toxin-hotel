import { FC } from "react";
import './diagram.scss';

export interface IDiagram {
    reviewCount: number,
    categoryPercentage: number[]
}

const Diagram: FC<IDiagram> = ({reviewCount, categoryPercentage}) => {
    return (
        <div className="diagram">
            <div className="canvas">
                <svg className="chart" width="120" height="120" viewBox="0 0 60 60">
                    {
                        categoryPercentage.map((el, index, arr) =>  
                        {   
                            let sum = 0;

                            for(let i = 0; i < index; i++) {
                                sum += arr[i]
                            }

                            return (<circle className="unit" r="26" cx="50%" cy="50%" strokeDasharray={`${164 / 100 * el - (index === arr.length - 1 ? 1.75 : 1)} 164`}
                                    strokeDashoffset={`-${164 / 100* sum}`}></circle>)
                        })
                    }
                </svg>
                <div className="voices">
                    <span>{reviewCount}</span> 
                    <br /> 
                    голосов
                </div>
            </div>
            <div className="legend">
                <ul className="caption-list">
                    <li className="caption-item">Великолепно</li>
                    <li className="caption-item">Хорошо</li>
                    <li className="caption-item">Удовлетворительно</li>
                    <li className="caption-item">Разочарован</li>
                </ul>
            </div>
        </div>
    )
}

export default Diagram;