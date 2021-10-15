// step 5: write your CatList presentational component here
import React, { Component } from 'react'

class CatList extends Component {
    render(){
        // console.log(this.props)
        // const { cats } = this.props.catPics
        // console.log({cats})
        const cats = this.props.catPics.map( c => {
            // debugger
            return (
                <img key={c.id} src={c.url} alt={c.source_url}/>
            )
        })
        // debugger
        return (
            <div>
                {cats}
            </div>
        )
    }
}

export default CatList