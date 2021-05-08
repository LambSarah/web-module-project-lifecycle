import React from 'react'
import { Col, Card, CardImg } from 'reactstrap'



class ContributionsGraph extends React.Component {
    render() {
        return (
            <>
                <div className='graph'>
                    <h3>Contributions to GitHub Repositories</h3>
                    <h3>
                        <img src={`http://ghchart.rshah.org/${this.props.user.login}`} width='700' height='300' />
                    </h3>
                </div>
            </>
        )
    }
}

export default ContributionsGraph;

// let graphHolder = document.createElement('div');
// cardInfo.appendChild(graphHolder);
// graphHolder.classList.add('retracted');
// let graphTitle = document.createElement('h3');
// graphTitle.style.textAlign = 'center';
// graphTitle.textContent = `${login}'s Contributions`;
// graphHolder.appendChild(graphTitle);
// let gitGraph = document.createElement('img');
// gitGraph.src = `http://ghchart.rshah.org/${login}`;
// gitGraph.id = 'graph';
// gitGraph.style.padding = "20px 5px";
// graphHolder.appendChild(gitGraph);