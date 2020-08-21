import React, { Fragment, Text } from "react";
import styled from 'styled-components';
import { TagInput } from "../lib";

const exampleTags = [
    {
        id: 1,
        displayValue: 'AWS D1 Cert',
    }, {
        id: 2,
        displayValue: '4G SMAW Cert',
    }, {
        id: 3,
        displayValue: 'Foreman',
    }, {
        id: 4,
        displayValue: 'Self-Starter',
    }
];

const onTagsChanged = (newTags) => {
    console.log('tags changed to: ', newTags);
};

const onInputChanged = (e) => {
    console.log(`input value is now: ${e.target.value}`);
}

const GithubRibbon = styled.div`
    position: absolute;
    font-family: 'Hind', sans-serif;
    font-size: 20px;
    top:-35px;
    right:-114px;
    transform-origin: top left;
    transform: rotate(45deg);
    background-color: #37393A;
`;

const GithubRibbonLink = styled.a`
    display: inline-block;
    width: 250px;
    color: #fff;
    font-size: 0.8em;
    letter-spacing: 0.06em;
    text-decoration: none;
    text-align: center;
    line-height: 30px;
`;

const App = () => (
    <Fragment>
        <Text>This is a description</Text>
        <TagInput tags={exampleTags} onTagsChanged={onTagsChanged} onInputChanged={onInputChanged}/>
        <Text>This is another description</Text>
    </Fragment>
);

export default App;
