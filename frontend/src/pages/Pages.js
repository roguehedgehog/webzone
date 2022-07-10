import { useEffect } from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import Video from './Video'
;

function PageContainer() {
    useEffect(() => {
        document.title = document.location.pathname.replace(/\/|-/g, ' ').trim() + " | Tahir Bulbrook's Webzone";
    });

    return (
        <Switch>
            <Route exact path="/motorcycle-videos/wales">
                <Video id="T9BaxLxCdJs" />
            </Route>
            <Route exact path="/motorcycle-videos/portugal">
                <Video id="837vMwyle8Y" />
            </Route>
            <Route exact path="/motorcycle-videos/morocco">
                <Video id="_oSyjkt_1pU" />
            </Route>
            <Route exact path="/motorcycle-videos/spain">
                <Video id="m2Z56AkcZqM" />
            </Route>
        </Switch>
    )
}

export default function Pages() {
    return <PageContainer />;
}