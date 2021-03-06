import React from "react";
import FastMultiplication from "./algorithems/FastMultiplacation";
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import CountInversion from "./algorithems/CountInversion";
import './AlgorithmApp.scss';
import QuickSort from "./algorithems/QuickSort";

export default function AlgorithmApp() {
    let { path, url } = useRouteMatch();
    return (
        <div className="algorithm-app container">
            <h3>Algorithem List</h3>
            <ul>
                <li>
                    <Link to={`${url}/fastmultiply`}>Fast Multiply-Karatsuba Multiplication</Link>
                </li>
                <li>
                    <Link to={`${url}/countinversion`}>Count inversions of numbers in list</Link>
                </li>
                <li>
                    <Link to={`${url}/quicksort`}>Quick Sort</Link>
                </li>
            </ul>
            <Switch>
                <Route path={`${path}/fastmultiply`}>
                    <FastMultiplication />
                </Route>
                <Route path={`${path}/countinversion`}>
                    <CountInversion />
                </Route>
                <Route path={`${path}/quicksort`}>
                    <QuickSort />
                </Route>
            </Switch>

        </div>
    );
}
