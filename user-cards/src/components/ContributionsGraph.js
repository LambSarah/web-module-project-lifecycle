import React from 'react'
class ContributionsGraph extends React.Component {
    render() {
        return (
            <>
                <div className='graph'>
                    <h3 className='title-username'>Contributions to GitHub Repositories</h3>
                    <h3>
                        <img src={`http://ghchart.rshah.org/${this.props.user.login}`} width='700' height='300' alt='Github Contributions' />
                    </h3>
                </div>
            </>
        )
    }
}

export default ContributionsGraph;