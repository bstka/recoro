import React, { Component } from 'react'
import '../bulma.css'
import BulHeader from "./BulHeader"
import BulHero from "./BulHero"
import BulCard from "./BulCard"
import BulNotiBottom from "./BulNotiBottom"
import Axios from "axios"
import BulTips from "./BulTips"

// const url = 'https://coronavirus-tracker-api.herokuapp.com/v2/locations/132'
const url2 = 'https://corona.lmao.ninja/countries/indonesia'

export class Body extends Component {
    // eslint-disable-next-line
    state = {
        data: '',
        loading: false
    }

    componentDidMount() {
        setInterval(() => {
            this.fetchIng()
        }, 10000);
        this.fetchIng()
    }

    async fetchIng() {
        this.setState({ loading: true })
        await Axios.get(url2).then(value => { 
            const data = value.data
            this.setState({ data, loading: false })
        }).catch(err => console.log(err))
    }


    render() {
        const { active, recovered, cases, deaths, } = this.state.data
        return (
            <>
                <BulHeader />
                <BulHero NameClass="is-black">
                    <BulTips />
                    <div className="columns">
                        <BulCard value={ cases } textColor="black" name="Kasus" delay="0" loading={this.state.loading} />
                        <BulCard value={ active } textColor="black" name="Terkonfirmasi" delay="1" loading={this.state.loading} />
                        <BulCard value={ recovered } textColor="success" name="Sembuh" delay="2" loading={this.state.loading} />
                        <BulCard value={ deaths } textColor="danger" name="Meninggal" delay="3" loading={this.state.loading} />
                    </div>
                </BulHero>
                <BulNotiBottom />
            </>
        )
    }
}

export default Body
