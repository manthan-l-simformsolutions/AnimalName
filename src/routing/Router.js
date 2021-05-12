import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

const Cats = React.lazy(
    () =>
        new Promise((resolve, reject) =>
            setTimeout(() => resolve(import("../pages/Cats")), 100)
        )
);
const Dogs = React.lazy(
    () =>
        new Promise((resolve, reject) =>
            setTimeout(() => resolve(import("../pages/Dogs")), 100)
        )
);
const Eagle = React.lazy(
    () =>
        new Promise((resolve, reject) =>
            setTimeout(() => resolve(import("../pages/Eagle")), 100)
        )
);
const Horse = React.lazy(
    () =>
        new Promise((resolve, reject) =>
            setTimeout(() => resolve(import("../pages/Horse")), 100)
        )
);

const Router = ({ match }) => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path={`${match.path}Cats`} component={Cats} />
                    <Route path={`${match.path}Dogs`} component={Dogs} />
                    <Route path={`${match.path}Horse`} component={Horse} />
                    <Route path={`${match.path}Eagle`} component={Eagle} />
                </Switch>
            </Suspense>
        </div>
    )
}

export default Router
