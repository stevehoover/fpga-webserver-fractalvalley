import React, {Component} from 'react';
import { HeaderComp } from '../components/header';
import { ExplorerContent } from './exolorerContainer.view';
import { TestExplorerContent } from './test.explorerContent';


export class TestView extends Component {

    render(){
        return(
            <div>
                <HeaderComp/>
                <TestExplorerContent/>
            </div>
        )
    }
}